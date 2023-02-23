input.onButtonPressed(Button.A, function () {
    if (pulsado == false) {
        pulsado = true
        if (num_icono == 0 || num_icono == 2) {
            music.playTone(988, music.beat(BeatFraction.Eighth))
            puntos_A += 1
            if (puntos_A == maxPuntos) {
                basic.showString("A: has ganado")
                basic.pause(5000)
                juego_detenido = true
            }
        } else if (num_icono == 8) {
            music.playTone(131, music.beat(BeatFraction.Double))
            basic.showString("A: has perdido")
            basic.pause(5000)
            juego_detenido = true
        } else {
            if (puntos_A > 0) {
                music.playTone(262, music.beat(BeatFraction.Eighth))
                puntos_A += -1
            }
        }
    }
})
function partida_nueva () {
    basic.showLeds(`
        # # . . .
        . # # . .
        . # # # #
        . # # . .
        # . . . .
        `)
    basic.pause(1000)
    juego_detenido = false
    puntos_A = 0
    puntos_B = 0
    pulsado = false
}
input.onButtonPressed(Button.AB, function () {
    partida_nueva()
})
input.onButtonPressed(Button.B, function () {
    if (pulsado == false) {
        pulsado = true
        if (num_icono == 0 || num_icono == 2) {
            music.playTone(988, music.beat(BeatFraction.Eighth))
            puntos_B += 1
            if (puntos_B == maxPuntos) {
                basic.showString("A: has ganado")
                basic.pause(5000)
                juego_detenido = true
            }
        } else if (num_icono == 8) {
            music.playTone(131, music.beat(BeatFraction.Double))
            basic.showString("A: has perdido")
            basic.pause(5000)
            juego_detenido = true
        } else {
            if (puntos_B > 0) {
                music.playTone(262, music.beat(BeatFraction.Eighth))
                puntos_A += -1
            }
        }
    }
})
function cambia_icono () {
    num_icono = randint(0, 9)
    lista[num_icono].showImage(0)
    pulsado = false
    basic.pause(250)
}
let puntos_B = 0
let juego_detenido = false
let puntos_A = 0
let num_icono = 0
let pulsado = false
let maxPuntos = 0
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
// para comprobaciones pongo un número pequeño.
// Cuando el programa ya funciona lo pongo a 10
maxPuntos = 4
partida_nueva()
basic.forever(function () {
    if (!(juego_detenido)) {
        cambia_icono()
    }
})
