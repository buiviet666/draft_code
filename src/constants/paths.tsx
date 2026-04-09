import TodoList from "../exercises/01-TodoList/TodoList";
import CaculatorNumber from "../exercises/02-CaculatorNumber/CaculatorNumber";
import type { ICONS } from "./icons";

export type ExerciresItem = {
    id: number,
    icon: keyof typeof ICONS,
    name: string,
    component: React.ReactNode
}

export const exerciresList: ExerciresItem[] = [
    {
        id: 1,
        icon: 'notes',
        name: 'todoEx',
        component: <TodoList />,
    },
    {
        id: 2,
        icon: 'calculator',
        name: 'calculatorNumber',
        component: <CaculatorNumber />,
    },
]