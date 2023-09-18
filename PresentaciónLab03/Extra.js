function extra(){
    var nombre = "Drenyer";
    var edad = 19;
    var hobbies = "ver series y jugar videojuegos";
    var animesFavoritos = ["Naruto", "One Piece", "Attack on Titan", "Fullmetal Alchemist: Brotherhood", "LVDSDH"];
    var personajeFavorito = "Jin Kazama";
    var videojuegoFavorito = "Dota 2";
    var generoHistoriaFavorito = "fantasía épica y aventuras";
    var metasFuturas = "crear mi propio juego de rol o escribir una novela de fantasía";

    var mensaje = `
    ¡Hola! Soy ${nombre}, tengo ${edad} años y mis pasatiempos son ${hobbies}. Algunos de mis animes favoritos incluyen ${animesFavoritos.join(", ")}. Mi personaje de anime favorito es ${personajeFavorito}, y uno de mis videojuegos favoritos es ${videojuegoFavorito}. Me encantan las historias de ${generoHistoriaFavorito} en mundos ficticios. Una de mis metas futuras es ${metasFuturas}. Siempre recuerdo la frase: "No importa cuántas veces te caigas, lo importante es cuántas veces te levantes".`;

    alert(mensaje);
}
