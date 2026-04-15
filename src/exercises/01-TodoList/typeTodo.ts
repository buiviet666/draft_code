export type Item = {
    id: string,
    name: string,
    checked: boolean,
    edit: boolean,
}

export const listFilter = [
    {
        id: 1,
        name: "all",
    },
    {
        id: 2,
        name: "do",
    },
    {
        id: 3,
        name: "completed",
    },
]