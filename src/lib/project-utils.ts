/**
 * Retorna a classe de cor apropriada baseada no status do projeto
 */
export function getStatusColor(status: string): string {
  switch (status) {
    case "Finalizado":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Em Progresso":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "Pausado":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

/**
 * Converte o status do projeto do formato do banco para texto exibido
 */
export function getStatusText(status: string): string {
  switch (status) {
    case "finished":
      return "Finalizado"
    case "in-progress":
      return "Em Progresso"
    case "paused":
      return "Pausado"
    default:
      return status
  }
}
