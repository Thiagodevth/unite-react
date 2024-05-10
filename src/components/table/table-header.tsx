import { ComponentProps } from "react";

interface TableHeaderPropos extends ComponentProps<'th'> {

}

export function TableHeader(props: TableHeaderPropos) {
    return (
        <th className="py-3 px-4 text-sm font-semibold text-left" {...props} />
    )
}