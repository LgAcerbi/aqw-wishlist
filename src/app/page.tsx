"use client";

import styles from "./page.module.css";

import { DataGrid, GridActionsCellItem, GridDeleteIcon } from "../lib/data-grid";
import Checkbox from "../lib/checkbox";

const columns = [
    {
        field: "obtained",
        flex: 0.5,
        headerName: "Obtained",
        type: "boolean",
        renderCell: () => <Checkbox></Checkbox>,
    },
    { field: "name", flex: 3, headerName: "Name", type: "string" },
    { field: "createdAt", headerName: "Created At", type: "date" },
    { field: "obtainedAt", headerName: "Obtained At", type: "date" },
    {
        field: "actions",
        minWidth: 150,
        headerName: "Actions",
        type: "actions",
        getActions: () => [
            <GridActionsCellItem
                key={"deleteAction"}
                icon={<GridDeleteIcon />}
                label="Delete"
                onClick={() => "Deleted"}
            />,
        ],
    },
];

const rows = [{ id: 1, obtained: true, name: "Something", createdAt: new Date(), obtainedAt: new Date() }];

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.headerContainer}>
                <div id="header">AQW WISHLIST</div>
            </div>
            <div className={styles.listContainer}>
                <DataGrid columns={columns} rows={rows}></DataGrid>
            </div>
            <div className={styles.footerContainer}>By: Acerbi</div>
        </main>
    );
}
