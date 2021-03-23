import React from 'react';
import Element from './Element';
const List = (props) => {
const mas = props.value;
const ListItems = mas.map((element)=><Element key={element.id} value={element.content} />)
return (<ul>
{ListItems}
</ul>
);
}
export default List;