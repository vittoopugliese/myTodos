import {AppConstants} from "./constants";

// Definición de las tareas
export const tasks = [
  {
    id: 1,
    title: "Mejorar Sistema de editado y apertura de tareas existentes",
    description: "Crear contexto y habilitar la vista de tarea haciendole click, y hacer que cuando se le hace hover al task-cont el icon del prioirity sea un lapid para editarla",
    code: "TT-001",
    priority: 1,
    status: AppConstants.TODO,
  },
  {
    id: 2,
    title: "Hacer Searchbar",
    description: "Crear barra de busqueda en el medio del header, hacerla funcional",
    code: "TT-002",
    priority: 1,
    status: AppConstants.TODO,
  },
  {
    id: 3,
    title: "Al hacer click en una tarea ya previamente abierta no pasa nada",
    description: "Se soliciona al crear un context para las tasks y separar la vista de taraea con la de edicion",
    code: "TT-003",
    priority: 2,
    status: AppConstants.TODO,
  },
  {
    id: 4,
    title: "Dummy task",
    description: "Dummy",
    code: "TT-003",
    priority: 3,
    status: AppConstants.BLOCKED,
  },
  {
    id: 4,
    title: "Dummy task",
    description: "Dummy",
    code: "TT-003",
    priority: 2,
    status: AppConstants.IN_PROGRESS,
  },
  {
    id: 5,
    title: "Dummy task",
    description: "Dummy",
    code: "TT-003",
    priority: 1,
    status: AppConstants.DONE,
  },
];