// Settings, default coordinates and zoom level
const defaultCenterCoordinates = [50.9412784, 6.9557065];
const defaultMapZoom = 10;
const defaultWikiStatus = 'Off'; // Default wiki status: 'EN', 'DE', 'ES', 'FR' or 'Off'
const showCustomMarkers = true; // Control to show/hide custom markers

// Data for the markers on the map
const markersData = [
    {
        coordinates: "52.46650, 13.43371",
        date: "17.05.2024",
        title: "Aufbruch",
        mediaType: "video",
        mediaSrc: "./media/2024-05-17-1.mp4",
        description: "So ihr lieben Freunde, |||Hier könnt ihr mich nun auf euren Handys eine Weile beim Wandern begleiten - hoffentlich den ganzen Weg von Berlin bis runter ans Meer! |||Wie oft, wie genau und wie ehrlich ich hier posten werde, weiß ich noch nicht. Aber aber es macht ja nur Spaß, wenn es immer Mal ein bisschen deftig zugeht, gell. Und wahrscheinlich kommen auch viele Videos. |||Jetzt zu den Fakten: Heute um die Mittagsstunde bin ich der Silbersteinstraße in Richtung Südosten aufgebrochen. |||Soweit läuft es sich herrlich. Obwohl ich derzeit noch, im Zustand höchster Sensibilität, jedem kleinsten Wehwehchen in den Gelenken nachspüre, kann ich soweit von keinem Schmerz berichten!",
        "map-center": false,
        "markerType": "orange"
    },
    {
        coordinates: "52.314917, 13.644611",
        date: "17.05.2024",
        title: "Schlafplatz",
        mediaType: "video",
        mediaSrc: "./media/2024-05-17-2.mp4",
        description: "Bisher bin ich noch weiterstehend in bekanntestem Terrain gelaufen. Damit ist es dann aber morgen vorbei. Heute schlage ich mein Zelt am Ufer der Dahme knapp südlich von Wildau auf. Kurz werde ich noch versuchen die Mückenflut mit dem Geruch von Zigaretten und Bier zu vertreiben. Wenn mir das nicht gelingt, mich aber bald hinter das schützende Netz verziehen. |||Auf eine ruhige erste Nacht! ✨",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "52.112028, 13.762333",
        date: "18.05.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-05-18.jpg",
        description: "Biwakplatz mit Dusche",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "52.05175, 13.855472",
        date: "19.05.2024",
        title: "Spreewald",
        mediaType: "video",
        mediaSrc: "./media/2024-05-19.mp4",
        description: "Grüßt euch! |||Mittlerweile liegt der dritte Wandertag bereits hinter mir. Nachdem ich es am Freitag nach etwa 25 Kilometer zumindest schon Mal über die Berliner Stadtgrenze geschafft hatte stand dann gestern eine größere Etappe an. Da mich die Brandenburger Sonne und die Flugzeuge des BER bereits um 6 Uhr morgens wachgeküsst hatten ging's eine halbe Stunde später direkt los. Erstmal lange entlang des Bahndamms des RE2 südlich Richtung Cottbus. |||Kurz vor Bestensee bekam ich dann das große Zittern. Und das bekam ich - weniger aus Angst vor dem langen Weg der noch vor mir liegt - sondern eher aus Unterzuckerung. Vielleicht beidem. Immerhin war ich nach einem üppigen Frühstück bis in den Nachmittag hineingelaufen und hatte dabei wohl zu wenig gegessen. Eine Nudelpfanne mit Cola haben das aber zügig wieder gerichtet. |||Dennoch wird mich das Thema wohl noch länger beschäftigen. Diverse Rechner im Web sagen mir mit, dass ich bei meinen durchschnittlichen Tagesetappen rund 2000 Kilokalorien zusätzlich zu meinem etwa ebenso großen Grundumsatz verbrauche. Das heißt ich müsste pro Tag etwa sechs Döner (650 kcal) essen müsste, um nicht sehr schnell mein kostbares Körpergewicht zu verlieren. |||Ich denke, ich werde kräftig Mandeln zufüttern (200g = 1000kcal) oder die ein oder andere Flasche Flüssignahrung zu mir nehmen. Aber jetzt gilt es erstmal das lange Wochenende ohne Kraftfutter zu überstehen. |||Aber zurück zur Route: Von Bestensee gings's weiter gen Süden nach Groß und Klein Köris. Hier war es dann endlich soweit: Ich hatte den Europäischen Fernwanderweg E10 erreicht, der mich - Inshallah - bis nach Österreich bringen soll. |||Hier stand ich dann vor der Wahl ob ich es nach den bisherigen 20km Mal gut sein lassen sollte oder ob ich nochmal 12 draufpacke und durch den Wald nach Märkisch Buchholz weiterlaufe. Es war noch früh, so ging ich los. Und das war dann vielleicht ein bisschen viel für den zweiten Tag. |||Kurz für die Kenner des Fachs: Mein Rucksack wiegt trocken, ohne Essen und Wasser etwa 13kg. Mit Proviant so 17kg. |||Der zog mich dann gegen Abend immer kräftiger in Richtung des sandigen Waldbodens. Aber mit vielen Pausen im Nieselregen ging's dann doch. Und ich glaube bleibenden Schaden hat der Laufapparat dabei nicht genommen. |||In der zweiten Nacht war dann der Schlaf entsprechend etwas tiefer und länger und die heutige Etappe etwas kürzer. Nach gut 16km bin ich mit schlurfendem Schritt im Spreewaldnest Schlepzig angekommen. Abgesehen von ein paar Wehwehchen (unappetitliche Hautirritationen auf den Schultern vom Rucksack, ein paar kleinen Druckstellen am Fuß) geht's mir tiptop. |||Die Landschaft hat sich von sandigen Kiefernwäldern mittlerweile in die sumpfigen Mangroven des Spreewaldes gewandelt. Aus dessen morastigen Sümpfen steigen neben modrigen Gasen, die die Sinne zu vernebeln scheinen, auch den ganzen Tag unablässig Mückenschwärme auf und suchen nach Beute. Das macht aber nix. |||Gerade donnert es ganz hübsch, aber jetzt ist es ohnehin Zeit fürs Gasthaus. |||Grüße! :) |||(Nochmal für die Kenner: Für die Messung der Distanzen benutze die Schrittzähler App von Google, die ist recht zuverlässig.)",
        "map-center": false,
        "markerType": "orange"
    },
    {
        coordinates: "52.014028, 13.885306",
        date: "19.05.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-05-19-2.jpg",
        description: "extrem viele Mücken aber schöne Aussicht",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "51.855985, 14.047505",
        date: "20.05.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-05-20.jpg",
        description: "Zelt hinter der Bushaltestelle im Dorf. Ich hoffe dass zählt dann nicht mehr als Naturschutzgebiet :)",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "51.78031, 14.217758",
        date: "21.05.2024",
        title: "Schlafplatz",
        mediaType: "video",
        mediaSrc: "./media/2024-05-21.mp4",
        description: "Hallo aus Papitz! |||So nun liegt der Spreewald hinter mir. In den letzten zwei Tagen ging es entlang der hübschen Kanäle im Wald durch die morastige Mückenhölle. |||Nachdem ich es am Sonntag etwas ruhiger hatte laufen lassen, rollte es Montag wieder wieder recht gut an. Nur waren die Mücken - vor denen ich am Vorabend schon um 20 Uhr im Zelt versteckt hatte - morgens auch bereits wach und warteten ganz aufgeregt hinter dem Netz. Also hab ich mit einer Hand das Lager abgebaut und mit der anderen wild um mich geschlagen. Beim Laufen ging's dann aber, denn ab einer gewissen Geschwindigkeit kommen die Mistbiester nicht mehr recht mit und man zieht nur eine kleine Wolke hinter sich her. |||So lief ich also zwischen malerischen Seen in Richtung Lübben. Nach gut zwei Stunden wurde ich hungrig und wollte ein kleines Frühstück einlegen. Sobald ich aber stehen blieb wurde ich von allen Seiten angegriffen, weshalb ich meine zwei Brötchen mit den Salamisticks in vollem Marsch essen musste. |||In Lübben hielt ich mich auch nicht lange auf, da ja die Schwesterstadt Lübbenau die Königin des Spreewaldes sein soll. Am frühen Abend kam ich dort nach flotten 28km an. Die Stadt war am Pfingstwochenende von Besuchern überlaufen. Tausende aus dem In- und Ausland waren gekommen, um sich in Känen über die Kanäle schippern zu lassen und sich mit Spreewaldgurken, Gurkenradler und Gurkeneis zu verköstigen. |||Auch abseits der Orte ist im Spreewald gut was los. Auf den Wander- und Radwegen, begegnet man in den allermeisten Fällen deutschen, heterosexuellen Pärchen zwischen 40 und 70. Überwiegend werden E-Bikes auf den oft schmalen Wegen gefahren, wobei der Mann immer voraus fährt und meist den Mund bei der Fahrt leicht geöffnet hat. Als wohlerzogener Wandersbub stelle ich mich dann meist auf die Seite um Platz zu machen und entrichtet einen freundlich-dezenten Wandergruß, wobei die Herren diesen meist nicht erwiedern und auch den Mund geöffnet lassen, während sie mich anstarren. Bei den Damen habe ich oft mehr Glück. Andere Wandersleute wie mich habe ich bisher auf dem E10 noch nicht getroffen. |||Als ich dann in Lübbenau nach einem doppelten Cheeseburger von meinen Stuhl aufstand tat mir dann leider gehörig die Verse weh. Nun war ich aber mitten im Biosphärenreservat Spreewald und ich hatte die Ahnung, dass ich dieses in Handschellen verlassen werde, würde ich hier mein Zelt aufschlagen. Deshalb dachte ich mir trotz der schmerzenden Hufe noch die 5 Kilometer bis nach Leipe zu gehen. Das ist zwar immer noch im Reservat aber nicht mehr Kernzone. Auf halber Strecke wurde es dann aber echt bös und der Schmerz zog gehörig in die Achillessehne hoch. Mit ganz kleinen Schritten kam ich aber endlich doch in dem märchenhaften Örtchen auf einer Waldesaue an und schlug mein Zelt hinter der Bushaltestelle auf, wo es nicht mehr so sehr nach Biosphärenreservat aussah. Und man ließ mich gewähren. |||Nachdem ich mir beim Einschlafen noch um meine achillische Schwachstelle sorgte, machte ich heute morgen ein paar ängstliche Gehversuche. Und siehe da es tut bisschen weh aber es geht. 🦶 Um den Erfolg nicht zu gefährden habe ich das Tempo dann den Tag über etwas gedrosselt und bin langsam aber stetig aus dem Naturschutzgebiet hinausgelaufen. Bei einer längeren Rast in Burg könnte ich mich mit Bandagen und Nüssen eindecken und sitze nun nach 20km Tagesetappe auf dem komplett mückenfreien Dorfplatz von Papitz. |||Mein Physiotherapeut und Mental-Coach macht mir Hoffnung, dass es mit den Hacken bald besser wird, wenn ich es nicht übertreibe und regelmäßig Pausen einlege. |||Morgen soll es denn ganzen Tag regnen. Deshalb werde ich wohl versuchen zackig ins 12km entfernte Cottbus vorzustoßen und mir dort ein Zimmer nehmen. Es ist höchste Zeit einmal meine Merionounterwäsche zu waschen und mir nochmal genau zu überlegen, was von dem ganzen Kram den ich mitschleppe, ich wieder nach Berlin zurückschicken kann. Ich glaube mit Proviant wiegt mein Tornister nun doch um die 18/19 kg. Das ist zu viel für die Versen. |||Heute Abend freue mich wieder meine Heringe in den ungeschützten Boden außerhalb des Bioreservats zu rammen, und somit auf ruhigen Schlaf, ohne den Förster fürchten zu müssen.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "51.749226, 14.325446",
        date: "22.05.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-05-22-1.jpg",
        description: "Besser!",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "51.636726,14.399749",
        date: "23.05.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-05-23.jpg",
        description: "Schöner Platz am Stausee umzingelt von Angelsachsen. 🎣",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "51.5458537, 14.5685364",
        date: "24. + 25.05.2024",
        title: "Schlafplatz",
        mediaType: "video",
        mediaSrc: "./media/2024-05-24.mp4",
        description: "Moin Moin vom Campingplatz! |||Die heutigen Grüße sende ich bereits aus Sachsen, dessen Grenze ich vor wenigen Stunden unbehelligt überschritten habe. Aber ich greife vor. |||Mittwoch: Nach einer kurzen Etappe von 12km erreichte ich Cottbus und quartierte mich zentral am Hauptbahnhof im Radisson ein. Dort habe ich, meinen Plan folgend, meine Unterhosen im Waschbecken gewaschen, mir drei Dosen Bier besorgt, einen Joint geraucht und erstmal ein paar Stunden nackt Fernsehen geschaut. Das Zimmer habe ich nur zwei Mal verlassen, um mir etwas hochkalorische Nahrung zu besorgen. (Ein BigMac Menü und einmal Com Rang mit Tofu) |||Nachdem ich mir am nächsten Tag noch geschickt das Frühstücksbuffet erschlichen hatte (nicht im Preis von 89€ inbegriffen?!), hab ich meine Sachen gepackt und das Hotel nach 18 wunderbaren Stunden wieder verlassen. Gut erholt ging es dann 21km meist entlang der Spree weiter nach Süden zur Talsperre Spremberg. Zwischen zwei schweigsamen Anglern, die meinen wohl etwas zu freundlichen Gruß nicht erwidert hatten, schlug ich mein Zelt in der Abenddämmerung auf. |||Zum Einschlafen gab's das Hitradio aus der Makita-Akku-Box der Nachbarn und mein Cosy-Head-Space-Hörbuch, 'Harry Potter und der Stein der Weisen', gelesen von Rufus Beck.  Erwacht bin ich dann, wie die Vögelchen um 6 und weiter ging's. |||Freitag Mittag, etwa auf der Brandburg-Sächsischen Grenze, war ich dann auch genau eine Woche unterwegs, was ein kleines erstes Zwischenfazit erlaubt: Es ist schön aber schmerzhaft. Hatte ich in meiner Vorbereitung die größte Sorge um meine Knie sind es jetzt doch meine Füße die Probleme machen. Und hier besonders der linke. Ganz genau die linke Ferse. Eine gewisse Linderung haben jetzt Gelkeile für die Hacken aus dem Sanitätshaus gebracht (danke für den Tipp Mutti!) die aber wiederum das Gewicht auf den Vorderfuß verlagern. Es fühlt sich an als würde ich auf sehr wackeligen High Heels laufen und nach einer Weile tun mir dann die Fußballen weh. Immer wieder wechsel ich zwischen meinen Beinen Schuhpaaren hin und her, aber es ist doch ein konstantes Schmerz-Managent. Mein Physiotherapeut sagt aber, das sei bei der 'Intensität und Dauer der Belastung normal' und ich solle nicht 'zu gesundheitsbewusst' an die Sache rangehen. |||Gleichzeitig folge ich seinem Rat und werde jetzt nochmal eine kleine Pause machen. Dafür hab ich's mir hier schön im Neptuncamp am Halbendorfer See gemütlich gemacht und bleibe bis Sonntag. Um mich voll auf die noch ungewohnte Atmosphäre des sächsischen Campingplatzes einlassen zu können und weil Wochenende ist, plane ich nach dem Frühstück morgen 20 microgramm 1P-LSD einzunehmen. (Keine Sorge Mutti das ist nur ganz wenig! 👼) |||Bis bald!",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "51.5438299, 14.5286259",
        date: "25.05.2024",
        title: "Besuch",
        mediaType: "image",
        mediaSrc: "./media/2024-05-25.jpg",
        description: "Endlich wieder Würzfleisch",
        "map-center": false,
        "markerType": "orange"
    },
    {
        coordinates: "51.5056130, 14.8223580",
        date: "26.05.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-05-26.jpg",
        description: "Sehr dünn besiedelt hier. Camp am Ufer der Neise. Auf der anderen Seite ist Polen.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "51.3862120, 14.8233750",
        date: "27.05.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-05-27.jpg",
        description: "Schöner Fischteich",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "51.2408178, 14.8203153",
        date: "28.05.2024",
        title: "Schlafplatz",
        mediaType: "video",
        mediaSrc: "./media/2024-05-28.mp4",
        description: "Hi! |||Ich sitze hier am Poetenteich in Ullersdorf und es regnet noch ein bisschen, so wie es schon den ganzen Tag ein bisschen geregnet hat. Hier unten 20 km westlich von Görlitz, also sozusagen im Osten des Ostens, habe ich nach 10 Tagen im platten Land endlich zum ersten Mal einen kleinen Berg am Horizont gesehen. Noch nicht das Erzgebirge, sondern den Löbauer Berg, eine sogenannte Vulkanruine. |||Hierher bin durch die seenreiche Lausitz gekommen von der ich jetzt Mal ein bisschen erzähle: |||Vom Campingplatz ging's nach Bad Muskau, Grenz- und Pücklerstadt, und von dort an der Neiße entlang nach Südosten. Vom Gefühl her, dass bislang am dünsten besiedelte Gebiet. Zumindest auf der deutschen Seite. Für ein bisschen Wurst, Käse und Brot husche ich hier zwei Mal über den Fluss nach Polen. Mein hier legales Kiffgras lasse ich im Gebüsch auf der deutschen Seite der Brücke. Man will die europäischen Nachbarn ja nicht provozieren. |||Am Fluss schwirren stetig Pferdebremsen. Zähe, gepanzerte Biester, die, wenn man sie voll mit der Handfläche erwischt einfach wieder losfliegen und nach ein paar Sekunden wieder an der gleichen Stelle sitzen und es noch einmal versuchen. Nach einer Weile merke ich der Trick ist, sie kräftig auf der Haut zu zerreiben. |||Auf etwa 15 Kilometer geht der Weg durch einen schmalen Korridor. Links fließt ruhig und braun der Grenzfluss. Rechts am Waldrand steht der Zaun des Truppenübungsplatzes 'Oberlausitz' auf dem früher die NVA geballert hat und heute die Bundeswehr ballert. Schon morgens früh hört man den Manöverbetrieb. Mal rattert eine scharfe Salve aus dem Wald heraus, dann erklingt ein dumpfer, großkalibriger Schuss. Dazwischen grollen Motoren, wohl von den Panzern. |||Aus dem Wikipedia Artikel: 'Seit 1996 wurden immer wieder einzelne Wölfe gesichtet, die über die Lausitzer Neiße aus Polen kamen. Etwa 1998 hat sich ein Pärchen auf dem weiträumigen Gelände niedergelassen. Da sie dort relativ ruhig leben können, hat sich die Population der einzigen freilebenden Wölfe Deutschlands in den folgenden Jahren stetig erhöht, so dass etwa um das Jahr 2005 ein zweites Rudel auszumachen war. Ein großer Teil der heute in Deutschland lebenden Wölfe lässt sich auf zwei weibliche Individuen zurückführen, die Töchter FT1 „Sunny“ und FT3 „Einauge“ des ersten Rudels von diesem Truppenübungsplatz.' |||Entlang des schmalen Korridors zwischen Polen und dem verboten Wald reihen sich eine Handvoll kleine Siedlungen meist aus zwei, drei aneinander gedrängten Bauernhöfen. (Kann man auf der angepinnten Karte ganz gut sehen.) An machen stellen ist der Streifen nur knapp 200 Meter breit. |||In der Abenddämmerung grüße ich einen Mann über den Gartenzaun. Der schreit leise auf. Nach kurzem Schreck lachen wir beide ein bisschen. 'Es kommen hier so selten Leute vorbei, da erschrickt man sich direkt.' |||In den kleinen Dörfchen stehen die Mahnmale für verlorenen Söhne von 1871, aus dem Ersten und Zweiten Weltkrieg. Ein Grabhügel ehrt die wendischen Könige, die im Mittelalter in Kriegen gegen die Polen gestorben sind. Dazu knallt es dumpf aus Wald. |||Auf einer Flutmauer am Dorfrand von Skerbersdorf sitzen zwei Männer beim Flaschenbier. Wo ich den hinwolle. Ach ja Italien, soll schön sein, hier Junge nehm ein Bier. Wir schwatzen ein bisschen über den Wolf und das Wetter. Und wo ich den her komme? Berlin. |||Der Name der deutschen Hauptstadt scheint im Inneren der Männer etwas zu lösen und zu mobilisieren. Man wolle ja jetzt wirklich nicht über Politik reden. Und dann reden sie über Politik. |||Die Regierung sind alles arbeitsscheue Vollidioten. Bismarck, das war noch ein richtiger Kanzler. Die Zeitungen hetzen gemein gegen den Krah - einen ehrlicher Mann, der die Wahrheit sagt - und die AfD ja sowieso. Der Russe will den Frieden. Frauen trauen sich nachts nicht mehr auf die Straße, wegen den Flüchtlingen. Ein Best-Off der Facebook-Kommentarspalten. Wie auswendig gelernt. |||Da drüben, man zeigt auf den Grenzfluss hinter dem in 50 Metern Polen beginnt, da könne man noch stolz sein ein Pole zu sein. Hier sei es ja mittlerweile verboten sein Vaterland zu lieben. 'Die lachen uns doch mittlerweile nur noch aus.' Fast meint man ein entferntes polnisches Lachen am anderen Ufer zu hören. |||Unterm Strich: nicht jeder in SS-Uniform war ein Verbrecher, aber jeder Moslem ist ein Triebtäter oder zumindest Islamist. |||Ich will mir ja Mühe geben, den Leuten hier nicht allzu voreingenommen gegenüber zu treten. Will die Menschen nicht durch meine arroganten Wessi-Augen sehen. Aber, wenn gleich die ersten zwei jeden Punkt im Faschismus-Bingo abhaken, ist es echt nicht leicht. |||Im Gespräch halte ich meistens meine Klappe. Widerspreche Mal halblaut oder streue eine kleine Anekdote aus meinem berliner Multi-Kulti-Leben ein. Die ganzen schlauen Sachen, die ich den Männern hatte antworten können, fallen mir leider jetzt erst in den Tagen danach ein. Bei der nächsten Diskussion nehme ich mir vor mehr in die Offensive zu gehen. |||Und das kann ich mir wahrscheinlich sogar erlauben. Als weißen Mann mit bürgerlich-bäuerlicher Sozialisation werde ich hier zumindest nicht von vorneherein gehasst und kann mich recht sicher fühlen und agieren. Für Menschen die diese Privilegien nicht haben, ist es hier sicher kein so sorgloser Wohlfühlort. |||Um das nun nicht so stehen zu lassen: Es sind ja wirklich nicht alle so. Immerhin wählte zuletzt ja 'nur' jeder vierte hier die scheiß AfD. |||Überall trifft man freundliche, herzliche, aufgeschlossene Menschen, die scheinen, als würden sie verzweifelt versuchen gegen den Ruf der Region anzulächeln. Eine Bäckerin fragt mich, ob wo ich den schlafe, ob ich da keine Angst hätte. Ich sage nein, der Wolf sei scheu und die Leute ja sehr nett. Sie: 'In der Zeitung steht aber was anderes.' |||Und so beliebt und oft leicht das Sachsen-Bashing auch ist. Es hängen unübersehbar in vielen Dörfern die Reichsflaggen in den gut gepflegten Gärten und kleben die verwitterten Nazi-Sticker an den Straßenlampen, die offensichtlich keiner abreißt. |||Aber dazwischen trifft man dann den netten Zittauer Ökologie-Studenten auf der Bieberpirsch, den gesprächigen alten Cottbuser Eisenbahner, dessen Kinder im Westen leben und kaum noch zu Besuch kommen oder die ältere Dame die mir Videos vom Mülltonnenrennen im Dorf aus dem WhatsApp-Verlauf mit ihren Enkelkindern raussucht. |||In Daubitz werde ich am Montagabend in die alte Dorfschenke reingewunken. Die Kneipe hat seit zehn Jahren zu, aber ein junger Mann hat am Wochenende geheiratet und versucht mit fünf Senioren auf der Eckbank noch die angebrochenen Fässer leer zu machen, bevor das Pfand zurück geht. Unter drei Bier komme ich nicht weg und muss den angebotenen Zeltplatz im Garten fünf Mal ablehnen. |||Also schön ist es hier an vielen Stellen. Nett und romantisch, wenn die Sonne durch die alten Eichenwälder scheint und die Katzen sich vor den hübsch renoviert Backsteinbauernhöfen räkeln. Aber es liegt etwas in der Luft, ein wenig Misstrauen und viel Wut im Hintergrund. Man sieht es nicht, aber kann es spüren. Ein bisschen, wie das düstere Grollen von Panzern und Kanonen im Wald.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "51.0897904, 14.6926595",
        date: "29.05.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-05-29.jpg",
        description: "Kleines Zimmer mit Balkon und im Bad eine Zecke an Popo entdeckt.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "50.9555981,14.5500692",
        date: "30.05 - 02.06.2024",
        title: "Schlafplatz",
        mediaType: "video",
        mediaSrc: "./media/2024-05-31.mp4",
        description: "Ahoj aus Rumburk, |||Seit gestern bin in Tschechien, gerade im Bett meiner kleinen Pension kapp hinter der Grenze. Angesichts des Wetterberichts habe ich in den letzten Tagen nochmal ordentlich auf die Wandertube gedrückt und die erste Bergetappe hinter mich gebracht, um vor dem großen Regen hier her zu kommen. In unserem Nachbarland kann man nämlich schon für 29€ pro Nacht fürstlichen logieren und sich für 10€ ordentlich satt essen. (Fassbier gibt's ab 1,50€!!) |||Unter diesen himmlischen Umständen werde ich dann wohl noch zwei weitere Nächte hier ausharren, bis sich die Füße etwas abgekühlt und die Wolken wieder verzogen haben. Dann wird auch schon Prag anvisiert, das noch etwa 100km entfernt ist. Heute Abend geht's aber erstmal in die Dorfdisko auf ein paar Wodka-Bull.|||Heute also nur ein kurzer Text dafür aber ein längeres Video mit den Bildern der letzten Woche.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "50.747513, 14.572202",
        date: "02.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-02.jpg",
        description: "Zeltplatz am Hunde-Trainingsplatz nach einer anstrengenden Bergetappe.",
        "map-center": false,
        "markerType": "blue"
    },
	{
        coordinates: "50.556638, 14.672292",
        date: "03.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-03.jpg",
        description: "Schön im Wald. Mit kleinen, beißenden Fliegen, die sich in den Haaren festsetzen.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "50.350831, 14.468368",
        date: "04.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-04.jpg",
        description: "Schön gelegen an der Elbe das Zelt unterhalb von Melnik im Dunkeln aufbaut.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "50.17909, 14.40097",
        date: "05.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-05.jpg",
        description: "Auf einem Acker vor Prag. Ich hoffe der Bauer verzeiht es mir.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "50.075407, 14.4232065",
        date: "06. - 09.06.2024",
        title: "Schlafplatz",
        mediaType: "video",
        mediaSrc: "./media/2024-06-06.mp4",
        description: "Hii!! |||Eine Woche ist der letzte Post nun her. Was ist geschehen?! |||Ich bin mittlerweile in Prag angekommen. Bis hier hin war es ein weiter Weg. Wir erinnern uns: Zuletzt war ich in Rumburk, der kleinen Stadt direkt hinter der Grenze. |||Dort hatte ich drei Nächte verbracht, den Regen abgewartet und die Zeit mit Essen, Schlafen und Fernsehen totgeschlagen. Viel raus gegangen bin ich nicht. |||Die Stadt hatte einen wirklich komischen Vibe. Was mir gleich am Anfang aufgefallen war, waren die vielen Menschen, mit ausgezehrten Gesichtern, die sich ruhelos und fahrig durch die Stadt bewegten. Ich denke Mal das hat mir dem Crystal Meth zu tun, dass in den Regionen auf beiden Seiten der Grenze seit Jahren ein übles Problem ist. |||Insgesamt war die Geschichte nicht besonders gnädig mit diesem Streifen hübschen, hügeligen Landes in Norden Böhmens. Während der Industrialisierung rauchten hier die Schornsteine. Zunächst noch in Österreich-Ungarn, dann in der Tschechoslowakei, zwischendurch unter deutscher Besatzung. Nach dem Krieg wurde die deutschsprachige Bevölkerung vertrieben. Und der Landstrich insgesamt von der Regierung in Prag vernachlässigt. Überall stehen verfallene Gründerzeit-Villen und die Jugendstilfassaden der Stadthäuser bröseln auf den Gehweg. Dazwischen stehen die traurigen Blocks aus den sozialistischen 60ern und 70ern. |||Und auch nach 1990 kam hier kein großer Aufschwung. Viele Menschen zogen weg, vieles stand leer. Dafür boomte es in anderen Teilen des Landes, wobei viele arme Roma aus zentraleren Städten des Landes verdrängt wurden und in die leeren Wohnungen im Norden zogen. Das führte zu enthnischen Spannung, die sich vor 10 Jahren in Gewaltausbrüchen entladen hatten. (FAZ Artikel von 2015 dazu (https://archive.ph/2012.07.31-025623/http://www.faz.net/aktuell/politik/ausland/roma-in-tschechien-zwist-im-zipfel-11129230.html)) Die angespannt Stimmung spürt man noch heute. Ich hatte den Eindruck die Bevölkerungsgruppen leben im Alltag getrennt voneinander und beäugen auch misstrauisch. |||Abends war niemand mehr auf der Straße. Nur ab und zu raste ein alter BMW mit quietschenden Reifen und schreienden Jugendlichen am Fenster durch die Innenstadt. Immer Mal dreht ein Polizeiauto seine Runden. Wie viel von dieser dünsteren Stimmung tatsächlich da war und wir viel davon bekiffte Paranoia von mir ist im Nachhinein natürlich schwer zu sagen. 🙃 |||Anyway. Als dann Sonntag der Regen vorüber war und es endlich los gehen sollte, waren meine Glykogenspeicher gut gefüllt und ich wollte da weg. |||Entlang durch hübsche kleine Dörfer ging's zwei Tage lang bis zum Rande der Daubaer Schweiz, einem Landschaftsschutzgebiet. Die lange Rast hatte meinen Beinen und Füßen echt gut getan. Ich konnte von morgens bis abends fast schmerzfrei laufen, was, trotz kleiner Berge, Tagesetappen von 34km am Sonntag bzw. 39km am Montag möglich machte. |||Dann ging's rein ins Schutzgebiet, auf und ab durch beeindruckende Sandsteinformationen. Leider hatte ich mir die Karte und die Nachschubsituation nicht besonders gut angeschaut und selbst die wenigen eingezeichneten Restaurants und Imbissbuden hatten an diesem Dienstag allesamt geschlossen. So hatte ich bis zum Nachmittag meinen Proviant bis auf ein paar Nüsse aufgezehrt und war noch weit davon entfernt wieder in zivilisiertes Gebiet vorzustoßen. |||Wie durch ein Wunder tauchte aus dem Dickicht dann doch noch eine Waldschenke auf, in der mir ein deftiges Gulasch serviert wurde. So gestärkt und motiviert den Sandstein-Dschungel hinter mir zu lassen, hab ich dann nochmal richtig Gas gegeben. Nach 44km und ordentlich Höhenmetern konnte ich mich schlussendlich bis nach Melnik schleppen und im Dunkeln mein Lager an Mündung der Moldau in die Elbe aufschlagen. (Mein erster Marathon! 🥹) |||Morgens dann weiter entlang des Flusses, schön ebenerdig, Richtung Prag. Eine letztes Nachtlager auf einem Acker nach nocheinmal 38km. Und dann ein lockerer Marsch in die goldene Stadt. |||Die vier Tage nach Rumburk waren bisher die anstrengensten was das Wandern angeht. Ich bin jeden Tag von 7 Uhr morgens bis in die Dämmerung gelaufen. In vier Tagen waren das etwa 155km. In der Zeit habe ich echt nichts anderes gemacht außer laufen, essen, rauchen und mein Lehrer auf- und abzubauen. Irgendwann kann man sich auch nicht mehr sehen, die wunderschönen alten Eichen, die malerischen Felsen und Flussläufe. Das niemals endende Vogelgezwitscher wird zum Glück durch meine In-Ear-Kopfhöhrer etwas gedämpft. |||Hinzu kommt noch, das ich, seit ich Deutschland verlassen habe kaum noch mit Menschen spreche. Der einzige Kontakt ist zu Service-Personal in Restaurants und Läden. Sonst geht zwischenmenschlich nicht viel. Zumal ich gegen Ende wohl auch ziemlich gestunken habe und niemanden mehr zu nahe kommen wollte. Aber auch nicht so schlimm. Durch das Internet bin ich meinen Liebsten ja stets verbunden. 🫶 Ach ja wer will, kann auch gerne Mal angerufen. Office hours sind von 6.00-22.00. |||(Kleiner Werbeblock: Es ist wirklich beeindruckend was Merinowolle an Geruchsunterdrückung leisten kann. Ich hab das ja immer für so Hippie-Material gehalten, aber nach 72 Stunden und unzähligen Schweißausbrüchen im gleichen T-Shirt, ist kaum ein Geruch zu vernehmen! 🐏) |||Wirklich wunderschön ist, dass die Schmerzen in den Füßen insgesamt deutlich nachlassen. Am Anfang, wenn mir was weh getan hat, lief auch noch viel die Angst mit, es könnte das Ende sein. Geht das wieder weg? Entzündet sich jetzt meine Achillessehne? Muss ich abbrechen? Es hat sich aber bisher bewehrt einfach weiterzulaufen. Wenn's bisschen aua ist, Mal etwas langsamer oder etwas anders abrollen, aber am Ende geht's wieder weg. |||Jetzt dürfen sich die Haxen sowieso erstmal drei Tage und Nächte in meiner Pension in Downtown Prag abkühlen und ab Sonntag Knöpfe ich mir das denn Süden Tschechiens  vor. |||Hier noch ein kleines Video mit ein paar Impressionen mit Smetana und ganz ohne ironischen Bruch. |||Liebe Grüße!! 👋",         
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "49.910341, 14.215974",
        date: "09.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-09.jpg",
        description: "Schöner Schlafplatz auf einem Hügel unter einem Strommast. |||Hoffentlich gibt's kein Gewitter",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "49.67734, 14.209107",
        date: "10.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-10.jpg",
        description: "Goldener Sonnenuntergang in den Weizenfeldern. |||Nachts ein röhrender Hirsch (?) neben dem Zelt.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "49.458863, 14.139674",
        date: "11.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-11.jpg",
        description: "Zelt am Waldrand neben einer etwas gruseligen quadratischen Siedlung.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "49.3057518, 14.1492376",
        date: "12.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-12.jpg",
        description: "Hübsches Hotel mit Blick auf die alte Stadtkirche",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "49.215598, 14.434167",
        date: "13.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-13.jpg",
        description: "Wieder zurück an der Moldau.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "48.9775282, 14.4799657",
        date: "14. - 16.06.2024",
        title: "Schlafplatz",
        mediaType: "video",
        mediaSrc: "./media/2024-06-14.mp4",
        description: "Geneigte Leserin, geneigter Leser, |||Heute schreibe ich dir aus dem südböhmischen Budweis. Der letzte Bericht kam aus Prag und seitdem ist nicht viel passiert. Ich würde hier gerne ein kurzes Zitat von Johann Gottfried Seumes 'Spaziergang nach Syrakus im Jahre 1802' voranstellen, dem es damals ähnlich ging: |||'Wir nahmen den Segen unsrer Freunde mit uns und pilgerten von Prag aus weiter. Wo ich nichts gesehen habe, kann ich Dir natürlicher Weise nichts erzählen. Nachtlager, sind Nachtlager; und ob wir Schinken oder Wurst oder beides zugleich aßen, kann Dir ziemlich gleichgültig sein.' |||Vielleicht doch kurz zur Route. In einem nur leicht nach Westen geschwungenen Bogen ging es vergleichsweise strack runter nach Süden. Manchmal direkt entlang der Moldau, meist in einem kleinen Abstand. Das Gelände war meist flach bis hügelig, was gutes Vorankommen möglich gemacht hat. |||Kleine hübsche Städtchen, immer Mal ein guter Ausblick, Mal ein Schlösschen, Mal Regen, Mal Sonnenschein - wer schon Mal draußen war, wird es kennen. Die Tage scheinen derzeit etwas zu verschwimmen. Wenn der Wanderweg Kapriolen und Umwege zu vermeintlichen Sehenswürdigkeiten macht, bin ich mir nicht zu schade auch Mal 5km an der Bundesstraße entlang zu schleichen, um etwas abzukürzen. Es geht jetzt darum voran zu kommen und die Distanz zum Ziel zu verringern. |||Meistens laufe ich bis in den Abend, esse mich nochmal satt und krieche dann ins Zelt. Zuletzt war es ist nicht immer ganz leicht morgens stinkenden aufzustehen, nachdem man sich schon Tage lang nicht geduscht hatte. Dann das taunasse Zelt einrollen und sich denken, geil heute wieder zwölf Stunden laufen und in den Wald kacken. |||Aber es wird auch nie langweilig. Wenn es regnet ziehe ich mein Cape über mich und den Rucksack. Das Wasser perlt an mir hinab und fließt in einem sanften Strom auf meine Hose knapp unterhalb des Knies und endlich in meine Schuhe. Ich erinnere, dass man sagt, der größte Feind des Soldaten liegt nicht im Schützengraben gegenüber, sondern es ist der nasse Stiefel. Die Socken werden also gewechselt, bis am Ende alle nass sind. |||Manchmal, mitten im Wald, wenn das Zeichen für den Mobilfunkempfang verschwindet und nur ein Parken-Verboten-Zeichen angezeigt wird, kann ich mich gegen einige morbide Gedanken nicht erwehren. Wenn ich nun schief auf einen Stein trete, abrutsche, umknicke und mir den Knöchel breche. Wie lange würde es, an einem regnerischen Dienstag, dauern bis mich jemand findet? Wie lang müsste ich auf allen Vieren kriechen, nur durch Zigaretten und Ibuprofen betäubt, bis das Handy wieder Signal bekommt? Ich hatte gelesen man sollte für solche Situationen eine Trillerpfeife dabei haben, da man wohl deutlich ausdauernder pfeifen als schreien kann. Die kaufe ich mir jetzt Mal. |||Aber im meist überwiegt das Gefühl allgemeiner Unsterblichkeit und die Gewissheit, dass ich vom Glück verfolgt bin. |||Laut meinem Schrittzähler habe ich seit Beginn der Reise ziemlich genau 1 Millionen Schritte gemacht und bisher bin ich noch nicht umgeknickt. |||Kurz vor Budweis dann noch ein magischer Moment: Die Luftlinie nach Trieste ist nun kürzer als die nach Berlin. Aktuell 401km zu 374km. Ein kleiner Triumph, auch wenn die größte Herausforderung noch vor mir liegt. |||Hier noch ein Zitat. Diesmal Werner Herzog: 'Wenn ich gehe, geht ein Bison. Wenn ich raste, ruht ein Berg.' |||Eine große Hilfe beim Wandern ist mir der Tabak. Ich wehre mich immer noch dagegen mit den albernen Stöcken zu laufen, denn mein Wanderstock ist dir Zigarette. |||Mein treuer Begleiter, der an vielen Ritualen des Tages beteiligt ist. Etwa mittags, ein deftiges Essen in der Dorfschenke, danach noch ein Kaffee und dazu eine Marlboro Gold. Jetzt nichts überstürzen. Abwarten, aushalten, sich zusammenreißen und die Zigarette bis zum Ende durchziehen. Bis zu den letzten Zügen, wo die Finger heiß werden und es kurz vor dem Filter nochmal so schön knistert. Dann los aufs Klo! Oder wenn ich abends erschöpft am Lager Sitz und die Beine langstreckt, dann kaut man doch als erwachsener Mensch keinen Kaugummi zum Tagesabschluss. Dann entfacht man das kleine 5-Minuten-Lagerfeuer vor der Nasenspitze und wärmt sich an der Glut. Alleine in der Wildnis. Ganz der Marlboro-Cowboy-Mann, den Rauch Richtung Horizont pusten. Wobei ich in dem Bild wohl eher das Pferd, das mit dem Sattel auf den Hüften, seinen Nylon-Rucksack-Reiter durch die Welt trägt. Aber genug Poesie und noch etwas Statistik: In den letzten 28 Tagen habe ich 1.732,65€ ausgegeben. Abzüglich einer neuen, schicken Wanderhose für 183€, die ich mir in Prag gekauft habe, entspricht das einem Tagesbudget von 56,79€, was ich ganz okay finde. |||Noch drei Tage, dann ist günstige Tschechien durchmessen. Dann kommt das sagenhafte Österreich in dem Schinken und Veltliner blühen. Wo aber auch die Alpen buckeln. Mein persönliches Mordor. Dort, im vierten Akt des Dramas - an den schroffen Kalksteinhängen - wird sich das Schicksal unseres Helden entscheiden. Also bleibt dabei! |||¡Content Warnung zum Video! |||Bisschen Blut, nochmal Zecken und nochmal Werner Herzog.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "48.79898, 14.515792",
        date: "16.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-16.jpg",
        description: "Nachtlager 20km vor der österreichischen Grenze.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "48.591432, 14.459886",
        date: "17.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-17.jpg",
        description: "Die erste Nacht in Österreich",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "48.468121, 14.528667",
        date: "18.06.2024",
        title: "Schlafplatz",
        mediaType: "video",
        mediaSrc: "./media/2024-06-18.mp4",
        description: "Die zweite Nacht in Österreich. Das Zelt steht mitten auf dem Wanderweg. Es ist warm. |||Hatte drei Zecken.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "48.397372, 14.545117",
        date: "19.06.2024",
        title: "Bierkeller",
        mediaType: "video",
        mediaSrc: "./media/2024-06-19.mp4",
        description: "Überraschung!",
        "map-center": false,
        "markerType": "orange"
    },
    {
        coordinates: "48.2625, 14.582088",
        date: "19.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-19_2.jpg",
        description: "Spätes Lager erst im Dunkeln gefunden.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "48.08569, 14.751226",
        date: "20.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-20.jpg",
        description: "19:15 - Zelt auf dem Berg. Bin zwar kein Meteorologe, aber für mich sieht das wie Gewitter aus. |||19:28 - ja sieht gar nicht gut aus. Richtig viele Blitze am Horizont. Ich bau mal ab und renn runter ins Dorf",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "47.9544289, 14.7670866",
        date: "21. - 23.06.2024",
        title: "Schlafplatz",
        mediaType: "video",
        mediaSrc: "./media/2024-06-21.mp4",
        description: "Pfiat' eich aus Waidhofen an der Ybbs 🏞️ |||Jetzt ist es soweit. Ich lagere an den ersten Ausläufern der Alpen. Wer vielleicht zwischendurch einen Blick auf die Karte geworfen hatte (bitte hier klicken (https://osaskia.github.io/soweit-die-knie-tragen/))  hat gemerkt, dass ich in Budweis den Europäischen Fernwanderweg E10 verlassen habe. Nachdem ich eine ganze Weile wie ein Feldherr über den Karten gebrütet hatte, habe ich mich für einen andere Marschroute entschieden. |||Das Ziel bleibt nach wie vor Trieste, aber ich plane nun die Alpen auf dem Eisenwurzenweg, statt dem E6 zu überqueren. Der ist nicht so weit östlich. Von Budweis aus bin ich also in einer fast geraden Linie nach Waidhofen querfeldein gelaufen und ab morgen geht's dann in die Berge!! 🥹🔨 (Die Karte wird bald aktualisiert) |||Seit ich am Montag Abend die österreichische Grenze überschritten habe hat sich einiges geändert: Ich rede wieder viel mehr mit den Leuten. Freilich mehr als mit den Tschechien, weil es schlicht nicht ging. Aber auch deutlich mehr als mit den Brandenburgern und Sachsen. Die Leute quatschen einen hier wirklich unentwegt an und hören dann nicht mehr auf. |||Los geht's gleich am ersten Morgen in Oberösterreich. Auf einer frisch gemähnten Weise werde ich von Stimmen geweckt. Ich denke mir gut, ist wohl der Bauer, vielleicht gibt's jetzt Mal Ärger. Aber nix. Es ist tatsächlich der Bauer, der mit seinem Enkel Pilze sucht. Aber es gibt keinen Ärger, sondern ich werde zum Frühstück eingeladen. Auf dem Hof bei selbstgemachten Eiern, Frischmilch und Erdbeermarmelade erzählte er sehr fleißig. Und das meiste konnte ich auch sehr gut verstehen. Von der Grenze. Wie es schön ist, dass sie weg ist, da man früher doch hin und wieder jemanden erschossen oder ins Gefängnis gebracht hätte. Wobei seit sie weg ist, die Grenze, doch auch viel wegkomme. Ihm habe man Mal im Wald bei der Arbeit die Kettensäge geklaut, als er kurz pinkeln war. |||Und auf die Zecken sollte ich aufpassen. Er habe vor drei Jahren eine auf der Brustwarze gehabt. Und wegen der pikanten Stelle sei keine Wanderröte aufgetreten und seine Borilliose blieb unerkannt. Es folgte ein schwere Erkrankung und Monate im Krankenhaus. |||Am nächsten Tag spricht mich wieder ein Mann an. Jäger, etwa Mitte 70. Er erzählt lange von einem Lichtbildvortag den der Pichler Seppl (oder so ähnlich) im Ort gezeigt hatte, nach dem er als Pensionierter den Jakobsweg gelaufen sei. Er selbst könnte ja nicht mehr so viel, denn auch er: Borilliose. Zecke irgendwo am Rücken, Krankenhaus, schwere chronische Nervenschäden. |||Ob ich den wisse, dass die Borilliose erst von den Amerikanern als biologische Kriegswaffe abgeworfen (https://www.aerztezeitung.de/Panorama/Zecken-als-Bio-Waffen-eingesetzt-314224.html) worden sei? Und jetzt sollen ja österreichische Forscher einen Impfstoff entwickelt (https://www.br.de/nachrichten/wissen/zecken-durchbruch-bei-impfung-gegen-borreliose,UFIQ5F5) haben. Leider hätten die diesen aber schon am Pfizer verkauft und jetzt mache der Ami auch noch Geld mit der Schweinerei. |||Seit ich Österreich bin hatte auch ich wieder eine Hand voll Zecken. Wohl vor allem weil es bei der Hitze mit der langen Hose nicht mehr geht. Aber es sind nur so ganz kleine süße und nicht mehr die dicken tschechoslowakischen Brummer. Die werden schon nichts haben. Trotzdem läuft der Holzbock irgendwie immer mit und man kann es nie so ganz genießen, wenn einem das hohe Gras über die Waden streicht. |||Die Landschaft wiederum ist herrlich. Überall fahren riesige Traktoren. Am allen Ecken wird vor allem das Heu geerntet. |||Am Mittwoch dann entscheide ich mich zu den angekündigten 30° und Sonnenschein entsprechend zum Frühstück 30 microgramm 1P-LSD einzunehmen. Vor mir liegt einen einfachen Streckenabschnitt entlang eines Flusses und einer Bahnlinie, wo es nicht so überlebenswichtig ist, die Umwelt klar und rational zu interpretieren. |||Nach etwa 2 Stunden entfaltet die Minidosis ihr Wirkung. Es ist ein schöner Zustand. Die Sinne sind geschärft aber nicht überreizt. Gegen eine anfängliche Nervosität und die Hitze hilft ein kühles Dosenbier. Kleinigkeiten werden zum Genuss. Das Gefühl mit der Stiefelverse einen jungen knackigen Apfel auf dem Asphalt zu zertreten rauscht durch den ganzen Körper. |||Man meint die Oberfläche eines Weizenfeldes oder eines dichten Waldes auf die Distanz mit der Haut fühlen zu können. |||Zwischendurch lege ich mich in einen frischen Fluss zu den Forellen. Ansonsten fetzen die Kopfhörer mit Diskosounds unter Volllast, während ich einen der letzten Festivalsommer meiner ausklingenden Jugend im Wald verpasse. |||Als ich dann noch in der größten Mittagshitze im Wald einen Bierkeller mit Kühlschrank und Vertrauenskasse entdecke, fällt es mir schon schwer keine religiösen Gefühle zu bekommen und nicht an Wunder zu glauben. |||Auch die Bevölkerung sorgt immer wieder für Erfrischungen. Einmal sitze ich vor einem Bauernhof und bekomme sofort eine Karaffe Eiswasser gereicht. Ein andermal einen Humpen Speckbirnenmost. |||Zu meinen Leid gibt es immer Mal wieder Mückenprobleme. Sogar nochmal heftiger als im Spreewald. Zuletzt kam es an den heißen Tagen im Wald vor, dass sich eine echte Wolke an Blutsaugern um mich bildet vor der es kein Entkommen gibt. Ich hatte gelesen, dass die Viecher ihr Opfer durch das ausgeatmete CO2 orten. Immer wieder halte ich deshalb die Luft an renne los, um sie abzuschütteln. Bei 30° und Steigung ein echter Kraftakt. |||Was ich sonst unterwegs gesehen habe könnt ihr im dieses Mal etwas längeren Video anschauen. (Diesmal: Nur einmal Insekten und TW nudity.) |||Ab Morgen wird's dann also erst. Ein bisschen sorge ich mich um steile Abhänge und die Versorgung mit Essen und Wasser. Aber das wird schon. Drückt mir die Daumen. |||Liebe Grüße!!",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "47.806765, 14.770354",
        date: "23.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-23.jpg",
        description: "Erste Nacht in den Alpen überlebt.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "47.674223,14.606915",
        date: "24.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-24.jpg",
        description: "Zelt in einer Schlucht am Fluss zwischen zwei Tausendern aufgestellt",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "47.500027, 14.483811",
        date: "25.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-25.jpg",
        description: "Bis in die Dämmerung gelaufen um noch von der Kaiserau herunter zu kommen. Habe eine Bäuerin gefragt ob ich auf ihrer Wiese zelten darf. Durfte ich nicht. Auf der nächsten Wiese habe ich dann nicht mehr gefragt.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "47.279393, 14.48356",
        date: "26.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-26.jpg",
        description: "Nach vielen Kilometern an der Autostraße entlang ein gemütliches Plätzchen gefunden.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "47.146402, 14.375361",
        date: "27.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-27.jpg",
        description: "Regenradar sieht ungemütlich aus und ich bin noch nass vom Nachmittag. Vielleicht lege ich mich auch schön in den Warteraum und teste die Kameraüberwachung.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "46.912666, 14.427442",
        date: "28.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-28.jpg",
        description: "Zelt auf dem Sportplatz aufgebaut. Beim Abendessen das Mückennetz aufgelassen und etwa 50 Insekten verschiedener Art drin gehabt.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "46.712361, 14.360381",
        date: "29.06.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-06-29.jpg",
        description: "Schöne Wiese aber viele Mücken",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "46.6254695, 14.3155378",
        date: "30.06 - 02.07.2024",
        title: "Schlafplatz",
        mediaType: "video",
        mediaSrc: "./media/2024-06-30.mp4",
        description: "Hallöchen! |||Die Alpen sind geschafft!! Also fast. Ich bin seit gestern in Klagenfurt und lege nochmal im Hostel die Füße hoch, bevor es dann über den Loiblpass nach Slovenien rüber geht. |||Meinen Angstfeind, das große Gebirge, hab ich in einem großen Schwung hinter mich gebracht. In Waidhofen hatte ich zunächst noch den Plan mich an den Eisenwurzenwanderweg zu halten. Aber schon am ersten Tag wollte der mich über die Strumpfmauer schicken, einen exponierten Gipfel, bei dessen Anblick von unten mir schon ganz schlecht wurde. Deshalb hab ich mir eine eigene Route drumherum gesucht. Den Modus habe ich dann auch den Rest der Woche beibehalten und mir weniger beängstigende und nicht so einsame Wege gesucht. |||So hab ich's in der letzten Woche ganz gut über die Pässe und Täler der Stayermark geschafft. Dabei bin ich schon auch immer Mal länger an gut befahrenen Autostraßen gelaufen. Aber die Autos und Lkw waren mit lieber als die einsamen Gipfel. Ich denke ich bin ein Wanderer und kein Bergsteiger und schon überhaupt kein Kletterer. |||An einigen Tagen war es echt brutal heiß. Dann immer wieder heftige Regengüsse aus dem Nichts. Einmal war es so dolle, dass ich innerhalb von 2 Minuten komplett nass war. Eine Hütte, die Schutz versprach, war sogar offen. Aber leider standen darin 10 brummende Bienenstöcke. |||Insgesamt stellen die frommen Götzenanbetern hier alle 500 Meter ein Kreuz, ein Schrein oder eine Kapelle für irgend einen Heiligen auf. Aber den Ausdruck christlicher Nächstenliebe in Form einer Schutzhütte sucht man vergebens. |||Als ich dann gestern hier ankam, hatte ich in einer Woche 220km zurückgelegt und wirklich Mal 7 Tage und 5 Stunden nicht geduscht. Das ist glaube ich mein persönlicher Lebensrekord. An den täglich frisch aufgetragenen Deoschichten hätte man, Baumringen gleich, die Tage ablesen können. Es überrascht mich , wie mein Zustand der Verwilderung in einer Woche zugenommen hatte. Aber auch schön, dass man in einer guten Stunde im Bad einen ganz passabeln Zustand wiederherstellen kann. |||Mittlerweile bin ich aber auch insgesamt abgehetzt wie ein altes Post Pferd. Zu den täglichen Erschöpfungszyklen kommt doch auch eine Grundmüdigkeit hinzu, die auch nach einem zwei Tagen der Ruhe nicht mehr verschwinden will. Aber zum Glück ist das Ziel ist nun nicht mehr weit. In zwei Wochen sollte es geschafft sein. Und hier Klagenfurt stehen schon die ersten Palmen! |||Die nächste Rast mache ich wohl in Ljubljana. Das Lied der Band Laibach im Video greift also schon etwas vor. |||Also liebe Grüße und drückt mir die Daumen, dass die Knochen, Sehnen und Schleimbeutel weiter so gut durchhalten! |||Ah und PS: Unser Administrator hat in die Übersichtskarte nun eine neue Funktion eingebaut. Man kann jetzt rechts an der Seite die Wikipedia-Artikel in der Umgebung zuschalten. :)",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "46.464332, 14.257313",
        date: "02.07.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-07-02.jpg",
        description: "Hab nach einem ebenen Schlafplatz in den Bergen an der Passstraße gesucht. Dann eine ältere Damen vor ihrem Haus angesprochen. Sie wohnt hier seit 75 Jahren. Hat mir das Gatter zur Kirche aufgeschlossen.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "46.25881, 14.348711",
        date: "03.07.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-07-03.jpg",
        description: "Aus den Alpen raus. Im Slowenischen Flachland. Für die nächsten 14 Stunden ist Regen angekündigt.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "46.0478991, 14.5186581",
        date: "04. - 08.07.2024",
        title: "Schlafplatz",
        mediaType: "video",
        mediaSrc: "./media/2024-07-04.mp4",
        description: "Dober dan liebe Freunde, |||Es geht dem Ende zu! Heute schreibe ich euch bereits aus meiner letzten Lagerstätte, Ljubljana. Hier hab ich's mir bereits seit Donnerstag gemütlich gemacht und Kräfte für die Schlussetappe gesammelt. |||Hierher bin ich in drei Flotten Tagen von Klagenfurt über den Loiblpass gekommen und hab damit das letzte Alpenabenteuer überstanden. Namentlich die Tscheppaschlucht bei Ferlach sei hier zu erwähnen, wo es über Gitterbrücken und beängstigend schmale Pfade entlang einer atemberaubenden Schlucht ging. Da habe versucht viel aufs Handy, statt in die Abgründe zu schauen, daher ist der Abschnitt im Video auch gut dokumentiert. |||Auf dem Weg hoch zum Loiblpass hatte ich noch eine sehr hübsche Begegnung. In der Dämmerung war ich an den steilen Hängen entlang der Passstraße auf der Suche nach einem Ebenen Flecken für mein Zelt. Ich fragte eine alte Dame vor einem der letzten Häuser auf österreichischer Seite. Sie bot mir an hinter der alten Kapelle, neben dem Friedhof zu lagern und schloss mir das Gatter auf. Die kleine ehemalige Gaststätte neben der Kirche war ihr Geburtshaus in dem sie seit 75 Jahren lebt. Mit schon deutlichem slowenischen Einschlag erzähle sie mir dann noch lange vom Leben am Pass von den Römern über Jugoslawien bis heute. |||Am nächsten Morgen ging's dannüber den Berg ins nun vierte Land meiner Reise. Slowenien ist doch sehr anders, als alles, was ich bisher aus Ex-Jugoslawien kannte. Das Land ist geleckt, sauber und ordentlich. Die Leute sind nur so mäßig freundlich. Und die Preise sind europäischer Durchschnitt. Es fühlt sich insgesamt mehr nach Österreich, als nach Balken an. |||Durchs grüne, flache Land mit dem Bergen im Rücken war's dann nicht mehr weit bis Ljubljana. |||Die allgemeine Gesundheit ist nach wie vor tip-top. Eine kleine Bindehautentzündung in der letzten Woche kam und ging wieder. Sonst tun mir, wie immer, die Füße gut weh. Aber alles nichts ernstes. |||Nun sind es noch etwa 110 Kilometer bis an die Küste. Bin mittlerweile ganz zuversichtlich, dass ich's schaffe. Die größte Herausforderung wird jetzt wohl zum Ende das Wetter: Es soll nächste Woche bis zu 35° werden. Ich versuche es jetzt nochmal mit den offiziellen Wanderwegen und starte auf dem Jakobsweg Ljubljana-Trieste. |||Tschüssi! Die nächste Nachricht kommt dann wohl schon vom Meer!! 🥹⛵️",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "46.0488852, 14.5083738",
        date: "",
        title: "Spezial-Hunde-Rückblick",
        mediaType: "video",
        mediaSrc: "./media/2024-07-07.mp4",
        description: "Spezial-Hunde-Rückblick mit allen meinen 54 kleinen und großen Freunden, die ich bisher getroffen habe.",
        "map-center": false,
        "markerType": "orange"
    },
    {
        coordinates: "45.963054, 14.272879",
        date: "08.07.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-07-08.jpg",
        description: "Am Wasser neben einem Dorf. Es war heute Mittag extrem heiß und ist bis jetzt immer noch sehr warm.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "45.807803, 14.157952",
        date: "09.07.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-07-09.jpg",
        description: "Hauptsache gerade! Und vielleicht keine Schnecken heute Nacht.",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "45.7563354, 14.0612558",
        date: "10.07.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-07-10.jpg",
        description: "Ein one-night-stop an einem Campingplatz mit Pool. Nur noch zwei Tage!",
        "map-center": false,
        "markerType": "blue"
    },
    {
        coordinates: "45.696389, 13.843357",
        date: "11.07.2024",
        title: "Schlafplatz",
        mediaType: "image",
        mediaSrc: "./media/2024-07-11.jpg",
        description: "Hab in der Dämmerung diese Hiška gefunden. Eine Traditionelle mörtellose Steinhütte für Schäfer. Gruselig aber ungefährlich.",
        "map-center": true,
        "markerType": "blue"
    },
    {
        coordinates: "45.654174, 13.7713404",
        date: "12.07.2024",
        title: "ENDE",
        mediaType: "video",
        mediaSrc: "./media/2024-07-12.mp4",
        description: "Ciao Ragazzi, |||es ist geschafft. Heut mittag gegen 10.30 bin ich der Bucht von Triest ins Wasser gestiegen. Damit endet die Reise nach genau 8 Wochen, weniger zwei Stunden. |||Schön war's, aber auch sehr anstrengenden. Gerade die letzte Etappe von Ljubljana unter der jüngsten Balkan-Hitzeglocke war nochmal echt brutal. An keinem Tag war es unter 30 Grad, oft kein Schatten und viele Berge. Aber ich soll nicht so viel jammern, hat man mir gesagt. |||Es war auch nochmal schön! Das viel besungene Slowenien ist tatsächlich immer Mal wieder sehr hübsch. Bären habe ich leider nicht gesehen, aber ich glaube ich stand gestern im Wald vor einem Elch. Oder zumindest vor einem Hirsch mit ähnlicher Schulterhöhe wie ich. Wir haben uns beide kurz erschrocken und er hat ich dann verpisst. |||Als heute morgen Trieste plötzlich unter mir da lag, war ich echt erleichtert, dass alles gut gegangen ist. Dass ich nicht umgeknickt oder abgestürzt bin, dass ich nicht überfahren oder überfallen wurde und dass meine körperliche und geistige Gesundheit allem standgehalten hat. Am Ende war ich nicht einen Tag ernsthaft krank oder verletzt. |||Wobei ich mir am gerade doch unsicher bin, ob ich mit der Wanderung meiner Gesundheit etwas Gutes getan habe, oder nicht doch körperliche Substanz aufgebraucht und die Mechanik verschlissen habe. Bisschen mehr Sonnencreme wäre wohl auch gut gewesen. |||Ich Frage mich auch an was ich mich in ein paar Jahren erinnern werde. An die Schmerzen, die hübsche Aussicht oder die bitter-süße Einsamkeit. Es wird sich zeigen. |||Die Einsamkeit war auf jeden Fall nicht ganz so schlimm, weil ihr alle dabei wart. 🥰 Vielen Dank für die langen Telefonate und die vielen Nachrichten und die Teilhabe an meinen Freunden und Leiden! Und, das ihr euch das ganze Zeug hier durchgelesen und angeschaut habt. |||Apropos Einsamkeit. Ich habe auf der ganzen Tour nicht eine Fernwandererin oder einen Fernwanderer gesehen, was mich im Nachhinein doch sehr wundert. Nur eine Hand voll Randreisenden hat mich  im letzten Abschnitt auf dem Weg nach Süden überholt. |||Heute hat man mich auch daran erinnert, dass ich schon zwei Mal, auf dem Weg in den Balkan, in Trieste halt gemacht habe. Einmal 2012 und einmal 2015. Beim letzten Mal hatten wir unser Gras aus Angst vor den kroatischen Grenzern unter einem Stein am Meer versteckt. Mal schauen, ob ich's noch finde. |||Mit oder ohne werde ich hier noch ein bisschen das Meer genießen und dann komme ich bald zurück und freu mich euch wieder zu sehen! 💖 |||Zum Schluss noch das wichtigste. Die Statistik: |||Tage: 56 |||Schritte: 1,991,680 |||Schritte pro Tag Ø: 35,565 |||Luftlinie Neukölln-Trieste: 759km |||Kilometer laut Routenplaner: 1350km |||Höhenmeter laut Routenplaner: 18.960m |||Kilometer laut Schrittzähler: 1550km |||Kilometer pro Tag Ø (nach Schrittzähler inkl Ruhetage): 27.7 |||Längste Tagesetappe: 44.3km |||Nächte im Zelt (Nächte im Bett): 37 (19) |||Tage geruht: 11 von 56 |||Länder: 6 - Deutschland, (Polen), Tschechien, Österreich, Slowenien, Italien |||Tage geraucht: 56 von 56 |||Tage Alkohol getrunken: 33 von 56 (aber leider nie richtig betrunken gewesen) |||Tage krank: 0! |||Zecken: ca. 12-15 |||Ein besonderer Dank gehen noch an meinen Physiotherapeuten und Mental-Coach, sowie meinen Karten-Administrator! Die aktualisierte Strecke kann man jetzt hier auch sehen! Und wer will kann hier auch die coole Karte mit eingezeichneten Wiki-Artikeln (<a href='https://osaskia.github.io/Wikipedia-Map/' target='_blank'>Wikipedia-Map</a>) weiter benutzen. |||In ein paar Jahren werde ich vielleicht Mal wieder so etwas machen. Wer mag kann gerne im Channel bleiben und wird dann davon erfahren. |||Aber jetzt erstmal Tschüssi und nochmal Danke! Hab euch alle lieb! 💕 |||Till",
        "map-center": false,
        "markerType": "orange"
    }
    // Additional markers can be added here
];
