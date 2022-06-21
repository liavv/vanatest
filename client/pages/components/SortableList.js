import React, { useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import arrayMove, {arrayMoveImmutable} from "array-move";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import styled from 'styled-components';

const SortableList = (props) => {
    const {list} = props;
    const [items, setItems] = useState(list||[]);

    const onDrop = ({ removedIndex, addedIndex }) => {
        setItems(items => arrayMoveImmutable(items, removedIndex, addedIndex));
    };

    return (
        <List>
            <Container dragHandleSelector=".drag-handle" lockAxis="y" onDrop={onDrop}>
                {items.map(({ id, text }) => (
                    <Draggable key={id}>
                        <ItemWrapper>
                            <ItemInside>
                            <ListItem className="drag-handle">
                                <ListItemText primary={text} />
                                <ListItemSecondaryAction>
                                    <ListItemIcon >
                                        <DragHandleIcon />
                                    </ListItemIcon>
                                </ListItemSecondaryAction>


                        </ListItem>
                            </ItemInside>
                        </ItemWrapper>
                    </Draggable>
                ))}
            </Container>
        </List>
    );
};

const ItemInside = styled.div`
  width:50%;
  margin:auto;
`;
const ItemWrapper = styled.div`
    display:flex;
    flex-direction: row;
   
`;
export default SortableList;