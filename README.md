![Screenshot from 2024-08-01 10-55-59](https://github.com/user-attachments/assets/577bfe0a-ffb4-43ad-8e73-7e3cf3459c58)

# [CoDialog - mesh collaboration](http://gui.codialog.com)

## Demo

Poniżej znajdują się kolejne implementacje interfejsu dla aplikacji #CoDialog

+ [codialog-multi-IDE.mp4](codialog-multi-IDE.mp4)
+ [codialog-multi-IDE-v2.mp4](codialog-multi-IDE-v2.mp4)


Poniżej znajduje się #demo aplikacji  #CoDialog na tablet 

+ [codialog-gui-tablet.mp4](codialog-gui-tablet.mp4)



CoDialog to kompleksowe rozwiązanie GUI, które łączy w sobie funkcje edytora, zarządzania, administracji, developmentu, monitoringu i obsługi projektów biotechnologicznych. 
Dzięki wykorzystaniu dostępu do danych, cloud computingu oraz wirtualizacji zasobów na maszynie roboczej, CoDialog oferuje uniwersalne narzędzie dostosowane do różnorodnych potrzeb użytkowników.

## Historia powstania

Gdy rozmawialiśmy z kolegą o biotechnologi, zrozumiałem jak wiele trzeba się nauczyć i jak wiele aplikacji i formatów danych używać.
Ta perspektywa zdeterminowała mnie do przemyślenia sposobu interakcji w celu przyśpieszenia prac nad różnymi projektami poprzez interfejs.

## Wytyczne

Zdefiniowałem kilka kluczowych cech jakie powinien posiadać taki interfejs:
+ lekki
+ elastyczny
+ skupiony na treści
+ ułatwiający przełączanie zestawów okien 
+ dystrybujący aplikacje bezpośrednio na poziomie definicji **URI** jak w **Apache Camel** dla API i protokołów


## Cechy

CoDialog łączy w sobie zaawansowane funkcje i intuicyjny interfejs.
Dzięki uniwersalności, personalizacji i mechanizmowi sesji, CoDialog umożliwia efektywną pracę w różnych środowiskach i na wielu urządzeniach jednocześnie. Demonstracyjna wersja oparta na docker compose ułatwia testowanie i wdrażanie, otwierając nowe możliwości w świecie GUI i aplikacji.


1. **Uniwersalność platformy**: CoDialog działa tak samo na każdej platformie i przeglądarce, zapewniając jednolite doświadczenie użytkownika niezależnie od urządzenia.

2. **Intuicyjny i minimalistyczny interfejs**: Interfejs CoDialog jest zaprojektowany z myślą o łatwości obsługi i przejrzystości, ułatwiając użytkownikom szybkie przyswojenie funkcji.

3. **Personalizacja interfejsu**: Użytkownicy mogą definiować własne zestawy okien dostosowane do różnych celów, opierając się na własnych usługach i preferencjach.

4. **Mechanizm sesji**: Funkcja sesji umożliwia jednoczesną pracę na wielu urządzeniach, zapewniając ciągłość pracy i dostęp do danych z dowolnego miejsca.

5. **Dopasowanie do aplikacji**: CoDialog jest dostosowany do każdego typu aplikacji na poziomie protokołu i API, zapewniając płynną integrację z istniejącymi systemami.

6. **Wersja demonstracyjna**: Demonstracyjna wersja CoDialog działa w oparciu o docker compose z konfiguracją usług, umożliwiając łatwe testowanie i wdrażanie.


## Zastosowania

- Edycja i tworzenie dokumentów
- Zarządzanie projektami
- Administracja systemami
- Development aplikacji
- Monitoring i analiza danych
- Projekty biotechnologiczne






## Możliwości użycia

Od edytora po zarządzanie, administrację, development, monitoring, kompleksowe projekty biotechnologiczne ...
CoDialog to uniwersalne narzędzie z wykorzystaniem dostępu do data i cloud computing oraz wirtualizacją zasobów na maszynie roboczej.
Zuniifkowany interfejs niezależny od platformy i wielkości ekranu pozwoli cieszyć się zasobami i funkcjami dotychczas tam nie dostepnymi lub ograniczonymi.

to dlatego AI (chatgpt) LLMy i python są popularne bo mają niski próg wejścia od strony interfejsu ...

+ jedna z implementacji, [cameraMonit](http://app.cameramonit.com) służy do monitoringu kamer w oknach GUI codialog z chatem do pytania kamer o zdarzenia z ostatnich 24 godzin, kamery IP korzystają z protokołu RTSMP, który jest również obsługiwany przez rozszerzenia GUI CoDialog.

+ [Jupyter and tensorboard in tmux and ssh | by Fabio M. Graetz | Towards Data Science](https://towardsdatascience.com/jupyter-and-tensorboard-in-tmux-5e5d202a4fb6)


## Opis GUI

#GUI zawiera kilka okienek do działań/operacji na wielu obiektach, plikach pobieranych z dysku/chmury oraz umożliwia komunikację głosową lub tekstową. 

### Okna

Aplikacja składa się z 4 okien w formie kratki, kolejno:

+ 1.Okno mediów (górne lewe)

+ 2.Okno Edycji (górne prawe)

+ 3.Okno podglądu (dolne lewe) 

+ 4.Okno komunikacji  (dolne prawe)



### Przycisk **CoPoint** i menu doboru okien **CoWindow**

Na skrzyżowaniu wszystkich okien znajduje się przycisk pozwalający na zmianę wielkości wszystkich okien jednocześnie, możliwe po najechaniu i przytrzymaniu przycisku możliwe jest przesunięcie centrum zbiegania się wszystkich okien.

### Pasek główny aplikacji, menu **CoPanel**

Na samym dole, poniżej okna podglądu i okna komunikacji znajudje się odseparowany od dołu, od lewej do prawej pasek aplikacji **CoPanel** z logiem CoDialog i napisem napisem "CoDialog" oraz przyciskami [upload], [run], [edit]




---



## Wcześniejsze wersje makiety

Grafika SVG przedstawiająca optymalny interfejsu użytkownika GUI, który zawiera kilka okienek do działań/operacji na wielu obiektach, plikach pobieranych z dysku/chmury oraz umożliwia komunikację głosową lub tekstową. 
Aplikacja jest napisana za pomocą React
Aplikacji składa się z 4 okien w formie kratki, kolejno od lewej górnej 1.Okno mediów, po prawej 2.Okno Edycji, od lewego dołu 3.Okno podglądu, 4. Okno komunikacji
Na skrzyżowaniu wszystkich okien znajduje się przycisk pozwalający na resize wielkości wszystkich okien jednocześnie, mołżiwe po naciśnijęu i przytrzymaniu przycisku możliwe jest przesunięcie centrum zbiegania się wszystkich okien.

1. Okno mediów po lewej stronie rozciąga się od góry do dołu. Zawiera pliki i foldery w postaci struktury z różnych źródeł, systemów, chmur, pliki dodaje się w oknie chat 
2. Okno Edycji zaznaczonego pliku z okna mediów
3. Okno podglądu mediów zaznaczonych w oknie mediów
4. Okno komunikacji głosowej/tekstowej znajduje się na dole, zaczynając się od końca oknie mediów. Przeznaczone do komunikacji człowieka z programem, komunikatów o stanie mediów, logi z operacji.

5. Na samym dole, poniżej okna podglądu i okna komunikacji znajudje się odseparowany od dołu, od lewej do prawej pasek aplikacji z logiem CoDialog i napisem napisem "CoDialog" oraz przyciskami [upload], [run], [edit]

**CoDialog** to u niwersalna apka z wykorzystaniem dostępu do data i cloud computing oraz wirtualizacją zasobów na maszynie roboczej.
Zuniifkowany interfejs niezależny od platformy i wielkości ekranu pozwoli cieszyć się zasobami i funkcjami dotychczas tam nie dostepnymi lub ograniczonymi.



## v1

![v1](guiv1.svg)
+ [svgviewer project](https://www.svgviewer.dev/s/wcaZPWIE)
  
## v2

![v2](guiv2.svg)

+ [svgviewer project](https://www.svgviewer.dev/s/t3pke0RG)

## v3

![guiv3](https://github.com/user-attachments/assets/3710c9bd-0784-4e4d-b280-82980c632ab1)

+ [svgviewer](https://www.svgviewer.dev/s/s3XFnFc0)
  
## v4

![guiv4](https://github.com/user-attachments/assets/17443b92-2bb9-41f3-a229-82f1023bd0cd)


+ [svgviewer](https://www.svgviewer.dev/s/inivyRMZ)


## v5

![guiv5](https://github.com/user-attachments/assets/27b2ac99-b8ef-4a89-b1d3-b92898437ef6)


+ [svgviewer](https://www.svgviewer.dev/s/IGxU0fl7)


## v6

![guiv6](https://github.com/user-attachments/assets/840cffad-0aa7-4f01-abda-ff6893372d55)

+ [svgviewer](https://www.svgviewer.dev/s/PflTbtQ2)


## v7

![guiv7](https://github.com/user-attachments/assets/851b20d0-2d33-4c5d-8be2-8b947410c144)

+ [svgviewer](https://www.svgviewer.dev/s/nUcWTokC)


## v8

![guiv8.png](guiv8.png)

+ [svgviewer](https://www.svgviewer.dev/s/HwgFXEsU)
