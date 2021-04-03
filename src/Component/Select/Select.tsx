import React, {MouseEvent, useState} from 'react';
import '../../App.css';
import './select.css'

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


    const val = () => {
        let k = props.item.find(i => i.title === nameValue)
        return (k?.title)
    }

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [nameValue, setNameValue] = useState<string>('Vova');
    // const [nameNone, setNameNone] = useState<boolean>(false);
    return (

        <div>
            <div
                className={'posRel'}
                onClick={() => {
                    setCollapsed(!collapsed)
                }}>
                {!collapsed && val()}
            </div>
            <div className={collapsed ? 'posAbs' : ''}>
                {collapsed && props.item.map((i) =>
                    <div
                        className={'divHover'}
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


};