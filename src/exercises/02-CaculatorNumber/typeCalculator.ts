export type dataBtnType = {
    lable: String,
    type: String,
    value?: Number | String,
}

export const dataBtn: dataBtnType[] = [
    {
        lable: "C",
        type: "action",
        value: "delete",
    },
    {
        lable: "()",
        type: "operator",
        value: "cluster"
    },
    {
        lable: "%",
        type: "operator",
        value: "percent",
    },
    {
        lable: "÷",
        type: "operator",
        value: "/",
    },
    {
        lable: "7",
        type: "number",
        value: 7,
    },
    {
        lable: "8", 
        type: "number",
        value: 8,
    },
    {
        lable: "9", 
        type: "number",
        value: 9,
    },
    {
        lable: "x", 
        type: "operator",
        value: "x",
    },
    {
        lable: "4",
        type: "number",
        value: 4,
    },
    {
        lable: "5", 
        type: "number",
        value: 5,
    },
    {
        lable: "6", 
        type: "number",
        value: 6,
    },
    {
        lable: "-", 
        type: "operator",
        value: "-"
    },
    {
        lable: "1",
        type: "number",
        value: 1,
    },
    {
        lable: "2", 
        type: "number",
        value: 2,
    },
    {
        lable: "3", 
        type: "number",
        value: 3,
    },
    {
        lable: "+", 
        type: "operator",
        value: "*",
    },
    {
        lable: "+/-",
        type: "operator",
        value: "prefix",
    },
    {
        lable: "0", 
        type: "number",
        value: 0,
    },
    {
        lable: ".", 
        type: "operator",
        value: "."
    },
    {
        lable: "=", 
        type: "action",
        value: "total",
    },
]