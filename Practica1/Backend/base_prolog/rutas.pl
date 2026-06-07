:- dynamic conexion/3.

carretera(X,Y,D):-
    conexion(X,Y,D).

carretera(X,Y,D):-
    conexion(Y,X,D).


ruta(Origen,Destino,Ruta,Distancia):-
    buscar(
        Origen,
        Destino,
        [Origen],
        Ruta,
        Distancia
    ).

buscar(
    Destino,
    Destino,
    Visitadas,
    Ruta,
    0
):-
    reverse(Visitadas,Ruta).


buscar(
    Actual,
    Destino,
    Visitadas,
    Ruta,
    DistanciaTotal
):-

    carretera(
        Actual,
        Siguiente,
        Distancia
    ),

    \+ member(
        Siguiente,
        Visitadas
    ),

    buscar(
        Siguiente,
        Destino,
        [Siguiente|Visitadas],
        Ruta,
        DistanciaRestante
    ),

    DistanciaTotal is
        Distancia + DistanciaRestante.


ruta_mas_corta(
    Origen,
    Destino,
    MejorRuta,
    MenorDistancia
):-

    findall(
        Distancia-Ruta,
        ruta(
            Origen,
            Destino,
            Ruta,
            Distancia
        ),
        Lista
    ),

    sort(
        Lista,
        [MenorDistancia-MejorRuta|_]
    ).

