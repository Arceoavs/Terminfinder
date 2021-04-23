# Terminfinder

Im Frühjahr 2021 einen Termin für die Aktualisierung von seinem Personalausweis und Reisepass zu finden, ist schwierig. Ob das an der Corona-Situation liegt, oder an erweiterten Urlabusansprüchen der Mitarbeiter, ist zu einem andereen Zeitpunkt zu erörtern.
Eine letzte Hoffnung, um rechtzeitig an Termine zu kommen sind last-minute Termine. Um an diese Termine zu kommen, muss das Online-Portal des Bürgeramtes regelmäßig überprüft werden.
Dies wird mit diesem Projekt automatisiert. Die Website kann mit diesem Projekt automatisch navigiert werden, um den nächsten Termin herauszufinden, der für beide Aktivitäten zur Veergügung steht.

## API

Das Backend wird durch eine Express.js-API abgebildet. Das automatische Navigieren durch die Website des Bürgeramtes geschieht mithilfe von Puppteer.

## Frontend

Das Frontend ist eine Vue.js Seite. Als Component Library dient Vuetify.

## Deployment

Sowohl Backend als auch Frontend sind mit Docker containerisiert und können auf Kubernetes Clustern deployed werden.
