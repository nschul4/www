$(function () {
    var term = new Terminal();
    term.open(document.getElementById('terminal'));

    function runFakeTerminal() {
        if (term._initialized) {
            return;
        }

        term._initialized = true;

        term.prompt = () => {
            term.write('\r\n$ ');
        };

        term.writeln('Hello.');
        term.prompt();

        term.on('key', function (key, ev) {

            term.write(key.charCodeAt(0) + "='" + key + "',");

            const printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;

            if (ev.keyCode === 13) {
                term.prompt();
            } else if (ev.keyCode === 8) {
                // Do not delete the prompt
                if (term.x > 2) {
                    term.write('\b \b');
                }
            }
        });

        term.on('paste', function (data) {
            term.write(data);
        });
    }
    runFakeTerminal();
});
