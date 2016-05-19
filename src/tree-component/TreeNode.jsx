import React from 'react'
import FolderNode from './FolderNode.jsx'

export default class TreeNode extends React.Component
{

    render()
    {


        let S=this.getStyles()
        let node=this.getNode(this.props.modal)
        let props=this.props
        let children=props.modal.expanded ? props.modal.children : []

        let y=this.props.modal.level * 20
        S.style.top = y

        let self=this

        return(
            <div style={S.style}>
                {node}
                {children.map(function(child) {

                    return self.getChildNode(child)

                })}
            </div>
        )
    }

    getChildNode(modal)
    {
        if(modal.children.length > 0 ) return <TreeNode key={modal.id} modal={modal} onArrowClick={ (id) => { this.props.onArrowClick(id) } } />
        else                           return this.getNode(modal)
    }

    getNode(modal)
    {


        switch(modal.type)
        {
            case "FOLDER_NODE" : return <FolderNode  key={modal.id} modal={modal} onArrowClick={ (id) => { this.props.onArrowClick(id) }}  />
        }

        return null;
    }
    getStyles()
    {
        return {
            style:{
                position:'absolute',
                width:'100%',
                left: 0,
                top:0

            }
        }
    }

}