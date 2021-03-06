import { LanguageInfo } from './language-info';
import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class KATCLanguageService {

    defaultLanguage = 'de';

    storageAvailable() {
        try {
            const storage = window.localStorage;
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return false;
        }
    }

    storeLanguage(lang: string) {
        if (this.storageAvailable()) {
            console.log(`Storing new language: ${lang}`)
            localStorage.setItem('katc-language', lang);
        }
    }

    getStoredLanguage(): string {
        if (this.storageAvailable()) {
            const storedLang = window.localStorage.getItem('katc-language');
            return storedLang ? storedLang : this.defaultLanguage;
        } else {
            return this.defaultLanguage;
        }
    }


    allLanguages(): [LanguageInfo] {
        return [
            new LanguageInfo('Deutsch (DE)', 'de'),
            new LanguageInfo('Português (BR)', 'pt-BR'),
            new LanguageInfo('Polski (PL)', 'pl'),
            new LanguageInfo('Nederlands (NL)', 'nl'),
            new LanguageInfo('български (BG)', 'bg'),
            new LanguageInfo('čeština (CS)', 'cs'),
            new LanguageInfo('Magyar (HU)', 'hu'),
            new LanguageInfo('日本語 (JA)', 'ja'),
            new LanguageInfo('ქართული ენა (KA)', 'ka'),
            new LanguageInfo('Svenska (sv-SE)', 'sv-SE')
        ];
    }

    getLanguageByCode(codeQuery: string): LanguageInfo {
        for (const lang of this.allLanguages()) {
            if (lang.code === codeQuery) {
                return lang;
            }
        }
        return null;
    }

}
