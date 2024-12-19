
# # Imprimir las tablas de multiplicar del 1 al 10

# for table_number in range(1, 11):
#     print(f"Las tablas son : {table_number}")
#     for table in range(1, 11):
#         print(f"{table} * {table_number} = {table_number * table}")
#     print("")

# # Imprimir numeros del 1 al 8 y tambien del 8 al 1

# for i in range(1, 9):
#     print(" " * (i -1), end="")
#     for j in range(i, 9):
#         print(j, end="")
#     print()

# for i in range(8, 0, -1):
#     print(" " * (i -1), end="")
#     for j in range(i, 9):
#         print(j, end="")
#     print()

# # Lista los primeros 151 pokemons de la API https://pokeapi.co/api/v2/pokemon/

# import pip._vendor.requests as requests
# url = "https://pokeapi.co/api/v2/pokemon?limit=151"
# response = requests.get(url)
# list = response.json()["results"]    
# for pokemon in list: # no lleva parentesis
#     print(pokemon["name"])


# # Crea una funcion para ver si 2 palabras son Anagramas

# def son_anagramas(string1, string2):
#     return sorted(string1.lower()) == sorted(string2.lower())

# print(son_anagramas("juan", "nauj"))
# print(son_anagramas("Hola", "Ola"))
# print(son_anagramas("Capacidad", "Capicua"))
# print(son_anagramas("capicua", "CAPICUA"))
# print(son_anagramas("abcdefg", "fgredtv"))

# # Convertir la temperatur de Celsius a Farenheit

# print("Conversor de temperatura")
# print("1.- Para convertir de Celsius a Farenheir")
# print("2.- Para convertir de Farenheit a Celsius")

# choice = input("Elige una opcion: ")

# grados = float(input("Temperatura a convertir: "))

# if choice == "1":
#     temperatura_convertida = (grados * (9/5) + 32)
#     print(f"{grados}° son {temperatura_convertida} grados farenheit")

# elif choice == "2":
#     temperatura_convertida = (grados - 32) * (5/9)
#     print(f"{grados}° son {temperatura_convertida} celsius")

# else:
#     print("Opción inválida")

# # Contador de vocales

# vocales = "aeiouáéíóú"
# contador = 0

# texto = input(("Ingrese una cadena de texto: "))

# for char in texto.lower():
#     if char in vocales:
#         contador += 1
# print(f"el total de vocales es {contador}")

# Saber si un numero es par o impar

print("Saber si un número es Par o Impar")
try:
    numero = int(input("Ingrese un número: "))

    if numero%2 == 0:
        print(f"el número {numero} es par")

    else:
        print(f"el número {numero} es impar")
except:
    print("Entrada inválida")