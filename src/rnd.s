;**************************
;
; Random dungeon generator
;
;**************************

        .code

	.include    "symbols.s"
	.include    "macros.s"

	.org	$8000

main	jsr	seedrnd
	jsr	rndcol	;Set the color
	rts

; Add A to FAC leaving result in FAC
addafac
	pha
	jsr	MOVAF	;Move FAC to ARG
	pla
	jsr	FLOAT	;Convert A to floating point in FAC
	lda	FACEXP	;Required for FADDT
	jsr	FADDT	;Add ARG to FAC putting result in FAC
	rts		;Return with result in FAC

; Multiply FAC by A leaving result in FAC
mulafac
	pha		;Save A on stack
	jsr	MOVAF	;Move FAC to ARG
	pla		;Get original value back in A
	jsr	FLOAT	;Convert value in A to floating point in FAC
	lda	FACEXP	;Required for FMULTT
	jsr	FMULTT	;Multiply ARG by FAC putting result in FAC
	rts		;Return with result in FAC
	
; Seed RND function by calling it with a variable negative number.
seedrnd	lda	RNDL	;RNDL is a good seed value, because it changes
	ora	#$80	;Make it negative so RND will interpret it as a seed
	jsr	FLOAT	;Convert it to floating point
	jsr	RND	;Seed the random number generator
	rts

; Generate a floating point random number in the range [0,1) with result in FAC
genrnd	lda	#1	;A 1 arg to RND says to give the next random num
	jsr	FLOAT	;Convert to floating point as required by RND
	jsr	RND	;Generate the random number
	rts		;Return with result in FAC

; Generate an integer random number in the range [0,A-1] with result in A
rnda
	pha		;Save parameter in A to stack
	jsr	genrnd	;Generate random number [0,1) in FAC
	pla		;Load multiplier into accumulator
	jsr	mulafac	;Multiply FAC by A
	jsr	CONINT	;Convert FAC to 1-byte int in X
	txa		;Put the result in A
	rts		;Return with result A

; Generate an integer random number in the range [1,A] inclusive 
; with result in A
rnd1a
	jsr	rnda	;Get an integer between [0,A-1] in A
	clc		;Change the range to [1,A]
        adc     #1
	rts

; Set the color to a random non-black value.
rndcol
	lda	#15	;Max color number
	jsr	rnd1a	;Generate a random non-black color number
	jsr	SETCOL	;Set the color
	rts

