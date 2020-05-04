PGM=rnd
BASE_DSK=../storage/prodos-2.0.3-boot.dsk
# It is necessary to use this older version of AppleCommander to support
# the PowerBook G4 and iBook G3. This version only requires Java 1.3.
AC=java -jar ../lib/AppleCommander-1.3.5-ac.jar
AS65=java -cp ../lib/65xx.zip uk.co.demon.obelisk.w65xx.As65
LK65=java -cp ../lib/65xx.zip uk.co.demon.obelisk.w65xx.Lk65
SRC=$(PGM).s
VOL=$(PGM)
DSK=$(PGM).dsk
APPLEWIN_VER=1.29.10.0

ifeq ($(OS),Windows_NT)
	COPY=copy
	EMU=$(USERPROFILE)\Dropbox\opt\applewin-$(APPLEWIN_VER)\applewin.exe -no-printscreen-dlg -s7 empty -s6d1
else
	COPY=cp
	EMU=$(HOME)/Dropbox/opt/applewin-$(APPLEWIN_VER)/applewin -no-printscreen-dlg -s7 empty -s6d1
endif

# There is some kind of problem with turning this into a boot disk
# after it is created by AppleCommander. So, copy an existing boot
# disk instead.
#$(AC) -pro140 $(DSK) $(VOL)

$(DSK): $(PGM)
	$(COPY) $(BASE_DSK) $(DSK)
	$(AC) -p $(DSK) STARTUP BAS < STARTUP#fc0801
	$(AC) -p $(DSK) $(PGM) BIN 0x8000 < $(PGM)

$(PGM): $(PGM).obj
	$(LK65) -output $(PGM) -bin $(PGM).obj

# as65 does not exit with a non-zero code so that make can detect when it failed.
$(PGM).obj: symbols.s macros.s $(SRC)
	$(AS65) $(SRC) 2>&1 | tee as65-output.txt && [ ! -s as65-output.txt ]

test: $(DSK)
	$(EMU) $(DSK)

clean:
	rm $(PGM) $(DSK) _FileInformation.txt $(PGM).obj *~

