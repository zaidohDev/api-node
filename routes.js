// Este arquivo define cada ponto de entrada dentro da aplicação
import message from './message/index'
import bills from './bills/index'
import users from './users/index'
import blogs from './blogs/index' 

export default (app) => {
    app.use('/', message )
    app.use('/bills', bills)
    app.use('/users', users)
    app.use('/blogs', blogs)
}