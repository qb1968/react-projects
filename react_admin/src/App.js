import * as React from 'react'
import {Admin,Resource} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import {UserList} from './components/User'
import {PostList} from './components/Post'
import {PostEdit} from './components/EditPost'
import {PostCreate} from './components/CreatePost'
import {DashBoard} from './components/DashBoard'


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')

const App = () => 
<Admin dashboard={DashBoard} dataProvider={dataProvider}>
  <Resource name='users' list={UserList}/>
  <Resource
    name="posts"
    list={PostList}
    edit={PostEdit}
    create={PostCreate}
    />
</Admin>

export default App