********************************
*                              *
* MACROS                       *
*                              *
* AUTHOR:  BILL CHATFIELD      *
* LICENSE: GPL2                *
*                              *
********************************

PUSHY    MAC
         TYA
         PHA
         EOM

POPY     MAC
         PLA
         TAY
         EOM

PUSHXY   MAC
         TXA
         PHA
         TYA
         PHA
         EOM

POPXY    MAC
         PLA
         TAY
         PLA
         TAX
         EOM

********************************
*                              *
* PUTS MACRO - OUTPUTS STRING  *
* ]1 = ADDRESS OF NULL-        *
*      TERMINATED STRING       *
*                              *
********************************

PUTS     MAC
         PUSHY
         LDY   #0         ; PREPARE LOOP INDEX
NEXT     LDA   ]1,Y       ; LOAD A CHARACTER
         CMP   #0         ; CHECK FOR END OF STRING
         BEQ   DONE
         ORA   #%10000000 ; SET HIGH BIT FOR OUTPUT
         JSR   COUT
         INY
         JMP   NEXT
DONE     POPY
         EOM

********************************
*                              *
* PUTF -                       *
* PRINTS FLOATING POINT NUMBER *
* IN FAC. DESTROYS VALUE IN    *
* FAC. DON'T KNOW WHY.         *
*                              *
* ]1 - ABS ADDR FOR STRING     *
*                              *
********************************

PUTF     MAC
         JSR   FOUT       ;CONVERT FAC TO STRING
         STA   ]1         ;STORE LOW BYTE OF STRING
         STY   ]1+1       ;STORE HIGH BYTE OF STRING
         PUTS  (]1)       ;PRINT STRING
         EOM
