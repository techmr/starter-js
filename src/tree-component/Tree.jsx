import React from 'react'

import TreeNode from './TreeNode.jsx'

export default class Tree extends React.Component
{

    constructor(props,context)
    {
        super(props,context)
        this.state={tmodal:this.getTreeModal()}
        this.setTreeAttributes(this.state.tmodal,0,0,{id: -1})
    }



    render()
    {

        console.log("Render")
        let S=this.getStyles();
        let modal=this.state.tmodal

        return(

            <div style={S.tstyle}>
                <TreeNode modal={modal}  onArrowClick={ (id)=>{this.onArrowClick(id) } } />
            </div>

        )
    }

    onArrowClick(id)
    {
        let tmodal=this.state.tmodal
        this.setTreeAttributes( tmodal,0,0,{id} )
        this.setState( {tmodal:{...tmodal}} )

    }

    getStyles()
    {
        return {
            tstyle:{
                backgroundColor: '#293341',
                border: '10px solid #293341',
                position:'relative',
                width: '250px',
                height: '600px',
                fontFamily : 'Work Sans',
                color: '#FFFFFF'
            }
        }
    }

    setTreeAttributes(tree,level,indent,update)
    {


        tree.indent=indent
        tree.level=level

        if ( !("expanded" in tree) ) tree.expanded=true

        if( tree.id==update.id) {
            console.log( tree.expanded)
            tree.expanded = !(tree.expanded)
            console.log( tree.expanded)

        }

        if(tree.expanded && tree.children.length > 0)
        {
            indent++
            level=0

            for (var i = 0; i < tree.children.length; i++) {
                let attr=this.setTreeAttributes(tree.children[i],level,indent,update)
                level=attr.level

            }
        }

        return {level,indent}


    }
    getTreeModal()
    {
        return{
            id : 101,
            type : "FOLDER_NODE",
            name:  "Questionaire",
            children:[
                    {id:1 , type : "FOLDER_NODE",name : "Screener",children : [
                        { id: 201 , type:"FOLDER_NODE" , name : "S1 - Age" ,children : []},
                        { id: 202 , type:"FOLDER_NODE" , name : "Demographics" ,children : [
                            { id: 301 , type:"FOLDER_NODE" , name : "D1 - Country" ,children : []},
                            { id: 302 , type:"FOLDER_NODE" , name : "D2 - Income" ,children : []},
                            {id: 303 , type:"FOLDER_NODE" , name : "D3 - Region" ,children : []}
                        ]},
                        {id: 203 , type:"FOLDER_NODE" , name : "S2 - Gender" ,children : []}
                    ]},
                    { id:2 , type : "FOLDER_NODE",name : "H1 - Hidden",children : [] },
                    { id:3 , type : "FOLDER_NODE",name : "Main Section",children : [
                        {id: 501 , type:"FOLDER_NODE" , name : "Q1 - " ,children : []},
                        {id: 502 , type:"FOLDER_NODE" , name : "Q2 - " ,children : []},
                        {id: 503 , type:"FOLDER_NODE" , name : "Q3 - " ,children : []}
                    ] },
                    { id:4 , type : "FOLDER_NODE",name : "Segmentation",children : [
                        {id: 501 , type:"FOLDER_NODE", name : "Q4 - " ,children : []},
                        {id: 502 , type:"FOLDER_NODE" , name : "Q5 - " ,children : []},
                        {id: 503 , type:"FOLDER_NODE" , name : "Q6 - " ,children : []}
                    ] }
            ],
        }
    }

}