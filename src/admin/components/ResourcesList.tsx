import { Producto, Tema } from "../interfaces";
import { Card } from "./Card";

type Props = {
    items: Producto[] | Tema[];
};

export const ResourcesList: Function = ({ items }: Props): JSX.Element[] => {
    return items.map(({ nombre, _id }) => (
        <Card key={_id} title={nombre} id={_id} />
    ));
};
