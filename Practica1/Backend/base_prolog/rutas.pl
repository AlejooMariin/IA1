

conexion(ciudad_1, ciudad_2, 40).
conexion(ciudad_1, ciudad_3, 70).

conexion(ciudad_2, ciudad_4, 30).
conexion(ciudad_2, ciudad_5, 90).

conexion(ciudad_3, ciudad_5, 20).
conexion(ciudad_3, ciudad_6, 60).

conexion(ciudad_4, ciudad_7, 50).

conexion(ciudad_5, ciudad_7, 40).
conexion(ciudad_5, ciudad_8, 80).

conexion(ciudad_6, ciudad_8, 30).

conexion(ciudad_7, ciudad_9, 45).

conexion(ciudad_8, ciudad_9, 20).
conexion(ciudad_8, ciudad_10, 60).

conexion(ciudad_9, ciudad_10, 25).



ruta(X,Y):- conexion(X,Y).

ruta(X,Y):-
    conexion(X,Z),
    ruta(Z,Y).

