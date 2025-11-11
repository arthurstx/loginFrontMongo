import React, { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { toast } from 'react-toastify'
import { getToken } from '../services/auth'
import { useAuth } from '../hooks/useAuth'

interface User {
  id: string
  name: string
  email: string
}

export default function FindPersonPage(): React.JSX.Element {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<User[]>([])
  const [page, setPage] = useState(1)
  const { loading, setLoading } = useAuth()

  async function handleSearch(e?: React.FormEvent) {
    if (e) e.preventDefault()
    if (!query.trim()) {
      toast.warning('Digite um nome para buscar.')
      return
    }

    const token = getToken()
    if (!token) {
      toast.error('Usuário não autenticado.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/find-person?name=${encodeURIComponent(query)}&page=${page}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      const data = await res.json()

      if (!res.ok) throw new Error(data.message || 'Erro na busca.')
      if (!data.user || data.user.length === 0) {
        toast.info('Nenhum resultado encontrado.')
        setResults([])
        return
      }

      setResults(data.user)
    } catch (err) {
      console.error(err)
      toast.error('Erro ao buscar usuários.')
    } finally {
      setLoading(false)
    }
  }

  async function handleDeleteUser(id: string) {
    const confirmDelete = confirm('Deseja realmente deletar este usuário?')
    if (!confirmDelete) return

    const token = getToken()
    if (!token) {
      toast.error('Usuário não autenticado.')
      return
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Erro ao deletar usuário.')

      toast.success('Usuário deletado com sucesso!')
      setResults((prev) => prev.filter((user) => user.id !== id))
    } catch (err) {
      console.error(err)
      toast.error('Erro ao deletar usuário.')
    }
  }

  useEffect(() => {
    if (query.trim()) handleSearch()
  }, [page])

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Buscar Pessoa</h2>

        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite o nome..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 text-white font-semibold rounded-md transition-colors ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </form>

        {results.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm text-gray-700">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">Nome</th>
                  <th className="text-left p-2">Email</th>
                  <th className="text-center p-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {results.map((person) => (
                  <tr key={person.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{person.id}</td>
                    <td className="p-2">{person.name}</td>
                    <td className="p-2">{person.email}</td>
                    <td className="p-2 text-center">
                      <button
                        onClick={() => handleDeleteUser(person.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Anterior
              </button>
              <span className="px-2 py-1">{page}</span>
              <button
                onClick={() => setPage((p) => p + 1)}
                className="px-3 py-1 border rounded"
              >
                Próxima
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Nenhum resultado exibido ainda.</p>
        )}
      </div>
    </div>
  )
}
