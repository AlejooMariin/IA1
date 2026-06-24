import pymysql

try:
    conn = pymysql.connect(
        host="localhost",
        user="root",
        password="root",
        port=3307,
        database="smartinvoice"
    )

    print("Conexión exitosa")

    with conn.cursor() as cur:
        cur.execute("SHOW TABLES")
        print(cur.fetchall())

    conn.close()

except Exception as e:
    print("ERROR:", e)