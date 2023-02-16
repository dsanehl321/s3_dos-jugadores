function cambia_icono () {
    num_icono = randint(0, 9)
    lista[num_icono].showImage(0)
    basic.pause(200)
}
let num_icono = 0
let lista: Image[] = []
lista = [
images.iconImage(IconNames.Heart),
images.iconImage(IconNames.Asleep),
images.iconImage(IconNames.Happy),
images.iconImage(IconNames.Ghost),
images.iconImage(IconNames.EigthNote),
images.iconImage(IconNames.Pitchfork),
images.iconImage(IconNames.StickFigure),
images.iconImage(IconNames.No),
images.iconImage(IconNames.Skull),
images.iconImage(IconNames.EigthNote)
]
basic.forever(function () {
    cambia_icono()
})
