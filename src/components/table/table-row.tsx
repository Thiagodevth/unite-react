import { ComponentProps } from "react";

interface TableRowPropos extends ComponentProps<'tr'> {

}

export function TableRow(props: TableRowPropos) {
    return (
        <tr className="border-b border-white/10 hover:bg-white/5" {...props} />
    )
}