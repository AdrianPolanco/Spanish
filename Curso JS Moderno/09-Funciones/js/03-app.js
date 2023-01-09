const objeto = {
    guardar: (cancion) => console.log(`Guardando canción ${cancion}....`),
    escuchar: (cancion) => console.log(`Escuchando canción ${cancion}....`),
    cerrar: (cancion) => console.log(`Cerrando canción ${cancion}...`),
    eliminar: (cancion) => console.log(`Eliminando canción ${cancion}`),
};

const miMix = ["Hometown Glory"];

miMix.forEach(function (song) {
    objeto.guardar(song);
    objeto.escuchar(song);
    objeto.cerrar(song);
    objeto.eliminar(song);
});
