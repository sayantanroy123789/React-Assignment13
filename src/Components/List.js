import React,{Component} from 'react';
class List extends Component{
  state={
    data:[]
  }
 async componentDidMount(){
   try{
    const responce=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await responce.json();
    console.log(data);
    this.setState({data:data.splice(0,20)});
   }catch(err){
    console.log(err)
   }
  }
  render(){
    console.log("b")
    const {data}=this.state;
    return(
      <div>
        <ul>
            {data.map((item)=>{
                return <li key={item.id}>{item.body}</li>
            })}
        </ul>
      </div>
    )
  }
}
export default List;
