$(document).ready(function () {
    $('#btn').click(function () {
        //ici on récupère nos value
        var lastName = $('#lastName').val();
        var firstName = $('#firstName').val();
        var birthDate = $('#birthDate').val();
        var placeOfBirth = $('#placeOfBirth').val();
        var job = $('#job').val();
        var company = $('#company').val();
        console.log(lastName);

        //ici on initialise des variables contenant nos regex
        var regexName = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖ][a-zàáâäãåąčćęèéêëėį']+([-][A-Z][a-z]+)?$/;
        var regexbirthdate = /^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/(19[0-9]\d|200\d|201[0-9]|202[0-1])$/;
        // on test la correspondance entre nos values récupérés dans l'input avec nos regex
        //si ça match pas on applique un border rouge à nos input
        //sinon si ça match, un border vert

        if (!regexName.test(lastName)) {
            $('#lastName').css('border', '2px solid red');
            $('#errorlastName').html('*Verifiez votre saisie').css('color', 'red');
            //si on match pas on retourne false pour arrêter notre fonction
            return false;
        } else if (lastName) {
            console.log('good')
            $('#lastName').css('border', '2px solid green');
            $('#lastName').addClass('Name');
        }
        if (!regexName.test(firstName)) {
            $('#firstName').css('border', '2px solid red');
            $('#errorfirstName').html('*Verifiez votre saisie').css('color', 'red');
            return false;
        } else if (firstName) {
            $('#firstName').css('border', '2px solid green');
        }
        if (!regexbirthdate.test(birthDate)) {
            $('#birthDate').css('border', '2px solid red');
            $('#errorbirthDate').html('*Verifiez votre saisie').css('color', 'red');
            return false;
        } else if (birthDate) {
            $('#birthDate').css('border', '2px solid green');
        }
        if (!regexName.test(placeOfBirth)) {
            $('#placeOfBirth').css('border', '2px solid red');
            $('#errorplaceOfBirth').html('*Verifiez votre saisie').css('color', 'red');
            return false;
        } else if (placeOfBirth) {
            $('#placeOfBirth').css('border', '2px solid green');
        }
        if (job) {
            $('#job').css('border', '2px solid green');
        } else if (!job) {
            $('#job').css('border', '2px solid red');
            $('#errorJob').html('*Vérifiez votre saisie').css('color', 'red');
            return false;
        }
        if (company) {
            $('#company').css('border', '2px solid green');

        } else if (!company) {
            $('#company').css('border', '2px solid red');
            $('#errorCompany').html('*Vérifiez votre saisie').css('color', 'red');
            return false;
        }
        //si nos variables renvoient true, on affiche une modale.
        if (Name && firstName && job && company && place && bornDate) {
            alert('Nom : ' + Name + ' Prénom : ' + firstName + ' Née le : ' + bornDate + ' à : ' + place + ' Emploi : ' + job + ' Chez : ' + company);
        }

    });
});
