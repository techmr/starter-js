import React from 'react'

export default class FolderNode extends React.Component
{
    constructor(props,context)
    {
        super(props,context)
        this.state={
            hover:false,
            selected: false
        }
    }

    hover( val)
    {
        this.setState( { ...this.state, hover:val } )
    }


    render()
    {
        let S=this.getStyles()
        let x=this.props.modal.indent * 20
        let y=this.props.modal.level * 20

        S.style.left=x
        S.style.top=0

        if(this.state.hover) S.style.backgroundColor='#202834'
        else S.style.backgroundColor='transparent'


        let icname='fa fa-folder-open'
        if(this.props.modal.children.length==0)
        {
            icname='fa fa-list-alt'
            S.arrow.display='none'
        }


        return(
            <div style={S.style}
                 onMouseEnter={(e)=>{  e.preventDefault();this.hover(true) ;return false; }}
                 onMouseLeave={(e)=>{ e.preventDefault(); this.hover(false) ; return false; }}
                 onContextMenu={(e)=>{ e.preventDefault(); console.log("Context"); return false; }}>

                <div style={S.hstyle}></div>
                <div style={S.vstyle}></div>
                <i className="fa fa-caret-down" aria-hidden="true" style={S.arrow}
                   onClick={(e)=>{  e.preventDefault(); this.props.onArrowClick(this.props.modal.id) ;return false; }}></i>
                <i className={icname} aria-hidden="true" style={S.icon}></i>
                <div style={S.label}>{this.props.modal.name}</div>
            </div>
        )
    }
    getStyles()
    {
        return{
            style:{
                position : 'absolute',
                display: ' inline-block',
                width: 150,
                height: 25,
                lineHeight : '25px',
                //border: '1px solid #c0c0c0',
                //backgroundColor : '#f0f0f0',
                fontSize : '12px',
                cursor:'pointer',
                transitionProperty: "top",
                transitionDuration: ".5s",
                transitionDelay: "0s"
            },
            hstyle:
            {
                position: 'absolute',
                height:1,
                //backgroundColor: '#e0e0e0',
                top : 10,
                width: 20,
                left: -20
            },
            vstyle:
            {
                position: 'absolute',
                width:1,
                //backgroundColor: '#e0e0e0',
                left: -20,
            },
            label:
            {
                position: 'absolute',
                left : 45,
                top : -1,
                WebkitUserSelect : 'none',
                cursor: 'pointer',
                color: '#c4cbc9'


            },
            icon:
            {
                position: 'absolute',
                left : 25,
                width: 25,
                height: 25,
                top: 5,
                cursor: 'pointer',
                color: '#a1aba8'
            },
            arrow:
            {
                position: 'absolute',
                left: 10,
                width: 25,
                height: 25,
                top: 3,
                fontSize : '15px',
                cursor: 'pointer',
                color: '#a1aba8'
            }
        }
    }
}