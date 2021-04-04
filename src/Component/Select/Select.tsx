import React, {MouseEvent, useState, KeyboardEvent, useEffect} from 'react';
import '../../App.css';
import s from'./select.module.css'

export type SelectType = {
    item: ItemType[]
    // onClick: (value : any) => void
    // changeValue: (value : any) => void
}
type ItemType = {
    title: string
    value: any
}

export let Select = (props: SelectType) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [nameValue, setNameValue] = useState<string>('Vova');



    const val = props.item.find(i => i.title === nameValue);


    const [hoverItem, setHoverItem] = useState(val);


    const findMous = (m: string) => {
        const val2 = props.item.find(i => i.value === m)
        setHoverItem(val2)
    }

    // useEffect(()=>{
    //     setHoverItem(val)}  , [props.item]
    // )

    const onKeyUp = (e : KeyboardEvent<HTMLDivElement> ) => {

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.item.length; i++) {
                if (props.item[i] === hoverItem) {
                    const pretendent = e.key === "ArrowDown"? props.item[i + 1] : props.item[i - 1];
                    if (pretendent){
                        setHoverItem(pretendent);
                        break;
                    }
                }
            }
        }
        if(e.key === "Enter"){

            const val = props.item.find(i => i.title === e.currentTarget.innerHTML);
            console.log(val);
            setHoverItem(val);
            setCollapsed(false);
        }
        if(e.key === "Escape"){
            setCollapsed(false)
        }

    }


    return (

        <div>
            <div
                className={s.posRel}
                onClick={() => {
                    setCollapsed(!collapsed)
                }}
                tabIndex = {0}
                onKeyUp={onKeyUp}
            >
                {hoverItem && hoverItem.title}

            </div>
            <div className={collapsed ? s.posAbs : ''}>
                {collapsed && props.item.map((i) =>

                    <div
                        key = {i.value}
                        onMouseEnter={() => {findMous(i.value)}}
                        className={`${s.divHover} ${hoverItem === i ? s.selected : ''}`}
                        id={i.value}
                        onClick={() => {
                            setNameValue(i.title)
                            setCollapsed(!collapsed)
                        }}
                    >
                        {i.title}
                    </div>
                )}
            </div>


        </div>
    )


}