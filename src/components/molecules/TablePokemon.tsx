"use client";

import { EntityReference } from "@/queries/pokemon";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { FC, useMemo } from "react";

interface TablePokemonProps {
  initialPage?: number;
  pokemon: EntityReference[];
  rowCount: number;
}

export const TablePokemon: FC<TablePokemonProps> = ({ initialPage = 0, pokemon, rowCount }) => {
  const router = useRouter();

  const columns = useMemo(() => [{ field: "name", headerName: "Name", sortable: false }], []);

  return (
    <DataGrid
      columns={columns}
      getRowId={(row) => row.name}
      disableColumnMenu
      disableRowSelectionOnClick
      initialState={{
        pagination: { paginationModel: { page: initialPage, pageSize: 20 } },
      }}
      onPaginationModelChange={(model) => {
        router.push(`/pokemon?page=${model.page}`);
      }}
      onRowClick={(row) => router.push(`/pokemon/${row.id}`)}
      paginationMode="server"
      pageSizeOptions={[20]}
      rows={pokemon}
      rowCount={rowCount}
      sx={{
        width: "50%",
        ".MuiDataGrid-cell:focus": {
          outline: "none",
        },
        "& .MuiDataGrid-row:hover": {
          cursor: "pointer",
        },
      }}
    />
  );
};
