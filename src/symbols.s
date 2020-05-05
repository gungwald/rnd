;*******************************
;                              *
; SYMBOLS                      *
;                              *
; AUTHOR:  BILL CHATFIELD      *
; LICENSE: GPL2                *
;                              *
;*******************************

RNDL	.EQU	$4e	;Continuously incremented while waiting for keyboard input
RNDH	.EQU	$4f	;High byte of RNDL
FACEXP	.EQU	$9d	;Address of FAC exponent used by FADDT,FSUBT,FMULTT,FDIVT

;*******************************
;                              *
; MEMORY MAPPED INPUT/OUTPUT   *
; ADDRESSES $C000 - $C0FF      *
;                              *
;*******************************

KBD .EQU $C000 ;BIT 7 IS 1 IF KEY PRESSED
KBDSTRB .EQU $C010 ;CLEARS KBD BIT 7
CLR80STO .EQU $C000 ;ALLOW PAGE2 PG1 & PG2 SWITCHING
SET80STO .EQU $C001 ;ALLOW PAGE2 MAIN & AUX SWITCHNG
STO80 .EQU $C018 ;1=PAGE2 SWITCHES MAIN/AUX
   ;0=PAGE2 SWITCHES VIDEO PAGES
CLR80VID .EQU $C00C ;TURN OFF 80-COL DISPLAY
SET80VID .EQU $C00D ;TURN ON 80-COL DISPLAY
COL80 .EQU $C01F ;0=40 COL IS ON, 1=80 COL IS ON
TEXTOFF .EQU $C050 ;SELECTS GRAPHICS MODE
TEXTON .EQU $C051 ;SELECTS TEXT MODE
TEXT .EQU $C01A ;1=TEXT MODE ACTIVE,0=GRAPH MODE
MIXEDOFF .EQU $C052 ;USE FULL-SCREEN GRAPHICS
MIXEDON .EQU $C053 ;USE GRAPHICS WITH 4 LINES TEXT
MIXED .EQU $C01B ;0=FULL SCREEN, 1=MIXED
PAGE2OFF .EQU $C054 ;SELECTS PAGE1 OR MAIN VID MEM
PAGE2ON .EQU $C055 ;SELECTS PAGE2 OR AUX VID MEM
PAGE2 .EQU $C01C ;1=VID PG2 SELECTED OR AUX SEL
HIRESOFF .EQU $C056 ;SELECTS LOW-RES GRAPHICS
HIRESON .EQU $C057 ;SELECTS HIGH-RES GRAPHICS
HIRES .EQU $C01D ;0=LOW-RES, 1=HIGH-RES

;*******************************
;                              *
; SUBROUTINES PROVIDED BY      *
; APPLESOFT BASIC              *
; IN READ-ONLY MEMORY          *
; ADDRESSES $D000 - $F7FF      *
;                              *
;*******************************

STROUT .EQU $DB3A ;PRINT STRING IN Y,A
GIVAYF .EQU $E2F2 ;CONVERT 2-BYTE INT A(HI) Y(LO) TO FLOAT IN FAC
CONINT .EQU $E6FB ;CONVERT FAC TO BYTE IN X, ERR IF FAC > 255
FADD .EQU $E7BE ;FAC = MEM + FAC, MEM ADDR IS Y(HI) A(LO)
FSUB .EQU $E7A7 ;FAC = MEM - FAC, MEM ADDR IS Y(HI) A(LO)
FMULT .EQU $E97F ;FAC = MEM * FAC, MEM ADDR IS Y(HI) A(LO)
FDIV .EQU $EA66 ;FAC = MEM / FAC, MEM ADDR IS Y(HI) A(LO)
FADDT .EQU $E7C1 ;FAC = ARG + FAC, MUST LOAD FACEXP INTO A FIRST
FSUBT .EQU $E7AA ;FAC = ARG - FAC, MUST LOAD FACEXP INTO A FIRST
FMULTT .EQU $E982 ;FAC = ARG * FAC, MUST LOAD FACEXP INTO A FIRST
FDIVT .EQU $EA69 ;FAC = ARG / FAC, MUST LOAD FACEXP INTO A FIRST
MUL10 .EQU $EA39 ;MULTIPLY FAC BY 10
FCOMP .EQU $EBB2 ;COMP MEM TO FAC
QINT .EQU $EBF2 ;CONVERT FAC TO INTEGER
FLOAT .EQU $EB93 ;CONVERT A TO FAC, I THINK
MOVAF .EQU $EB63 ;MOVE FAC INTO ARG
MOVMF .EQU $EB2B ;MOVE FAC TO MEMORY Y,X
MOVFA .EQU $EB53 ;MOVE ARG TO FAC
MOVFM .EQU $EB2B ;MOVE MEMORY TO FAC
INT .EQU $EC23 ;APPLESOFT INT FUNCTION
PRINTFAC .EQU $ED2E ;PRINT FAC. USES FOUT,STROUT
FOUT .EQU $ED34 ;FAC TO STRING, FAC DESTROYED
RND .EQU $EFAE ;APPLESOFT RND FUNCTION

;*******************************
;                              *
; SUBROUTINES PROVIDED BY      *
; SYSTEM MONITOR PROGRAM       *
; IN READ-ONLY MEMORY          *
; ADDRESSES $F800 - $FFFF      *
;                              *
;*******************************

PLOT .EQU $F800 ;PLOT BLOCK ON LOW-RES SCREEN
HLINE .EQU $F819 ;HORIZONTAL LINE
VLINE .EQU $F828 ;VERTICAL LINE
CLRSCR .EQU $F832 ;CLEAR LOW-RES SCREEN
CLRTOP .EQU $F836 ;CLEAR THE TOP OF LOW-RES
NEXTCOL .EQU $F85F ;INCREMENT COLOR BY 3
SETCOL .EQU $F864 ;SET LOW-RES GRAPHICS COLOR
SCRN .EQU $F871 ;READ THE LOW-RES SCREEN
TEXTCMD .EQU $FB2F
TEXTMODE .EQU $FB39
GR .EQU $FB40 ;BASIC GR COMMAND
WAIT .EQU $FCA8
COUT .EQU $FDED ;WRITE A CHARACTER
CROUT .EQU $FD8E ;WRITE A CARRIAGE RETURN
PRBYTE .EQU $FDDA ;PRINT VALUE OF BYTE

