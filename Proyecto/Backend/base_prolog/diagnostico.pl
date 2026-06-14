:- dynamic sintoma/1.
:- dynamic falla/1.
:- dynamic recomendacion/2.
:- dynamic diagnostico/2.

:- multifile sintoma/1.
:- multifile falla/1.
:- multifile recomendacion/2.
:- multifile diagnostico/2.


sintoma(pantalla_negra).
sintoma(pantalla_azul).
sintoma(pantalla_con_lineas).
sintoma(pantalla_parpadea).

sintoma(equipo_lento).
sintoma(apertura_lenta_programas).
sintoma(programas_no_responden).

sintoma(cierre_aplicaciones).
sintoma(reinicios_inesperados).

sintoma(ruido_disco).
sintoma(archivos_corruptos).

sintoma(temperatura_alta).

sintoma(sin_audio).
sintoma(desconexion_bosina).

sintoma(sin_internet).

sintoma(usb_no_reconoce).
sintoma(no_reconoce_bosinas).

sintoma(teclas_no_responden).
sintoma(teclas_doble_click).


falla(memoria_ram_daniada).
falla(memoria_ram_mal_instalada).
falla(sobrecalentamiento_cpu).
falla(ventilador_cpu_daniado).
falla(monitor_defectuoso).
falla(disco_duro_daniado).
falla(sistema_operativo_corrupto).
falla(virus).
falla(exceso_programas_arranque).
falla(espacio_insuficiente).
falla(conector_wifi_daniado).
falla(configuracion_internet_incorrecta).
falla(controlador_audio_corrupto).
falla(bocinas_desconectadas).
falla(teclado_defectuoso).
falla(puerto_usb_daniado).
falla(controlador_usb_daniado).



recomendacion(
    memoria_ram_daniada,
    'Apagar el equipo, limpiar los modulos RAM y probarlos individualmente.'
).

recomendacion(
    memoria_ram_mal_instalada,
    'Verificar que los modulos RAM esten correctamente colocados.'
).

recomendacion(
    sobrecalentamiento_cpu,
    'Limpiar ventiladores y reemplazar la pasta termica.'
).

recomendacion(
    ventilador_cpu_daniado,
    'Reemplazar el ventilador del procesador.'
).

recomendacion(
    monitor_defectuoso,
    'Probar con otro monitor y revisar el cable de video.'
).

recomendacion(
    disco_duro_daniado,
    'Respaldar informacion importante y reemplazar el disco.'
).

recomendacion(
    sistema_operativo_corrupto,
    'Ejecutar herramientas de reparacion o reinstalar el sistema operativo.'
).

recomendacion(
    virus,
    'Realizar un escaneo completo con un antivirus actualizado.'
).

recomendacion(
    exceso_programas_arranque,
    'Deshabilitar programas innecesarios al iniciar el sistema.'
).

recomendacion(
    espacio_insuficiente,
    'Eliminar archivos innecesarios y liberar espacio en disco.'
).

recomendacion(
    conector_wifi_daniado,
    'Verificar o reemplazar el adaptador WiFi.'
).

recomendacion(
    configuracion_internet_incorrecta,
    'Revisar configuracion IP, DNS y conexion de red.'
).

recomendacion(
    controlador_audio_corrupto,
    'Reinstalar o actualizar los controladores de audio.'
).

recomendacion(
    bocinas_desconectadas,
    'Verificar conexion fisica y alimentacion de las bocinas.'
).

recomendacion(
    teclado_defectuoso,
    'Limpiar o reemplazar el teclado.'
).

recomendacion(
    puerto_usb_daniado,
    'Probar otro puerto USB y revisar posibles danos fisicos.'
).

recomendacion(
    controlador_usb_daniado,
    'Reinstalar o actualizar los controladores USB.'
).





diagnostico(
    Sintomas,
    memoria_ram_daniada
):-

    member(Sintomas,[pantalla_azul,reinicios_inesperados]).


diagnostico(
    Sintomas,
    memoria_ram_mal_instalada
):-

    member(Sintomas,[pantalla_negra, reinicios_inesperados]).


diagnostico(
    Sintomas,
    sobrecalentamiento_cpu
):-

    member(Sintomas, [temperatura_alta, reinicios_inesperados]).


diagnostico(
    Sintomas,
    ventilador_cpu_daniado
):-

    member(Sintomas, [temperatura_alta, equipo_lento]).


diagnostico(
    Sintomas,
    monitor_defectuoso
):-

    member(Sintomas, [pantalla_con_lineas, pantalla_parpadea]).


diagnostico(
    Sintomas,
    disco_duro_daniado
):-

    member(Sintomas, [ruido_disco, archivos_corruptos]).


diagnostico(
    Sintomas,
    sistema_operativo_corrupto
):-

    member(Sintomas, [pantalla_azul, programas_no_responden]).


diagnostico(
    Sintomas,
    virus
):-

    member(Sintomas, [equipo_lento, programas_no_responden, apertura_lenta_programas]).


diagnostico(
    Sintomas,
    exceso_programas_arranque
):-

    member(Sintomas, [equipo_lento, apertura_lenta_programas]).


diagnostico(
    Sintomas,
    espacio_insuficiente
):-

    member(Sintomas, [equipo_lento, programas_no_responden]).


diagnostico(
    Sintomas,
    conector_wifi_daniado
):-

    member(Sintomas, [sin_internet]).


diagnostico(
    Sintomas,
    configuracion_internet_incorrecta
):-

    member(Sintomas,[sin_internet]).


diagnostico(
    Sintomas,
    controlador_audio_corrupto
):-

    member(Sintomas, [sin_audio, no_reconoce_bosinas]).


diagnostico(
    Sintomas,
    bocinas_desconectadas
):-

    member(Sintomas, [sin_audio, desconexion_bosina]).



diagnostico(
    Sintomas,
    teclado_defectuoso
):-

    member(Sintomas, [teclas_no_responden, teclas_doble_click]).


diagnostico(
    Sintomas,
    puerto_usb_daniado
):-

    member(Sintomas, [usb_no_reconoce]).


diagnostico(
    Sintomas,
    controlador_usb_daniado
):-

    member(Sintomas, [usb_no_reconoce, no_reconoce_bosinas]).




get_diagnostico_rapido(
    Sintomas,
    Diagnostico,
    Recomendacion
):-

    diagnostico(
        Sintomas,
        Diagnostico
    ),

    recomendacion(
        Diagnostico,
        Recomendacion
    ),

    !.


get_diagnostico_completo(
    Sintomas,
    Diagnostico,
    Recomendacion
):-

    diagnostico(
        Sintomas,
        Diagnostico
    ),

    recomendacion(
        Diagnostico,
        Recomendacion
    ).



falla(Falla de pruebaaa).
