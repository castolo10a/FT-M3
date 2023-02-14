const express = require("express");

const publications = [];

const server = express();

server.use(express.json());

let index = 1;

server.post("/posts", (req, res) => {
    const {author, title, contents} = req.body;
    if(author && title && contents){
        const publicacion = {
            id: index++,
            author,
            title,
            contents,
        }
        publications.push(publicacion);
        return res.status(200).json(publicacion)
    }
    else{
        return res.status(400).json({error: "No se recibieron los parámetros necesarios para crear la publicación"})
    }
})

server.get("/posts", (req, res) => {
    const {author, title} = req.query;
    if(author && title){
        const searchResults = publications.filter((publi) => publi.author === author && publi.title === title);

        searchResults.length
        ? res.status(200).json(searchResults)
        : res.status(400).json({error: "No existe ninguna publicación con dicho título y autor indicado"})
    }
    else {
        res.status(400).json({error: "No existe ninguna publicación con dicho título y autor indicado"})
    }
})

server.get("/posts/:author", (req, res) => {
    const {author} = req.params;
    const searchResults = publications.filter((publi) => publi.author === author)
    if(searchResults.length){
        return res.status(200).json(searchResults)
    }
    res.status(400).json({error: "No existe ninguna publicación del autor indicado"})
})

server.put("/posts/:id", (req, res) => {
    const {id} = req.params;
    const {title, contents} = req.body;
    
    if(id && title && contents){
        const searchResults = publications.find((publi) => publi.id === Number(id))
        
            if(searchResults){
                newPubli = {...searchResults, title, contents}
                return res.status(200).json(newPubli)
            }else{
                res.status(400).json({error: "No se recibió el id correcto necesario para modificar la publicación"})
            }
    }else{
        res.status(400).json({error: "No se recibieron los parámetros necesarios para modificar la publicación"})
    }
})

server.delete("/posts/:id", (req, res) => {
    const {id} = req.params;
    if(!id){
        res.status(400).json({error: "No se recibió el id de la publicación a eliminar"})
    }else{
        const searchResults = publications.find((publi) => publi.id === Number(id));
        if(!searchResults){
            res.status(400).json({error: "No se recibió el id correcto necesario para eliminar la publicación"})
        }else{
            deleteId = publications.filter((publi) => publi.id !== Number(id))
            res.status(200).json({ success: true })
        }
    }
})

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
