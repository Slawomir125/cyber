
document.getElementById('checkbox').addEventListener('change', () => {
  const menuContent = document.querySelector('.menu-content');
  menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
});
function hide_menu(){
  const checkbox = document.getElementById('checkbox');
  checkbox.checked = false;
  const menuContent = document.querySelector('.menu-content');
  menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
}

  document.getElementById('theme-select').addEventListener('change', (event) => {
    const theme = event.target.value;
    document.body.className = theme;
  });
  

  document.getElementById('font-size-select').addEventListener('change', (event) => {
    const fontSize = event.target.value;
    const newSize = fontSize === 'small' ? '14px' : fontSize === 'medium' ? '18px' : '22px';
    document.querySelectorAll('*').forEach(element => {
      element.style.fontSize = newSize;
    });
  });
  
  

  const sections = document.querySelectorAll('.animated-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach((section) => observer.observe(section));
  

  i18next.init({
    lng: 'pl',
    resources: {
      pl: {
        translation: {
          header: {
            title: 'Zagrożenia Cyberbezpieczeństwa',
            subtitle: 'Poznaj najgroźniejsze ataki oraz sposoby obrony.'
          },
          menu: {
            phishing: 'Phishing',
            ddos: 'Atak DDoS',
            malvertising: 'Malvertising',
            mitm: 'Ataki MITM',
            language: 'Język:',
            theme: 'Motyw:',
            fontSize: 'Rozmiar czcionki:'
          },
          theme: {
            light: 'Jasny',
            dark: 'Ciemny',
            highContrast: 'Wysoki kontrast'
          },
          fontSize: {
            small: 'Mała',
            medium: 'Średnia',
            large: 'Duża'
          },
          ddos: {
            title: 'Atak DDoS',
            description: 'Atak DDoS to próba przeciążenia zasobów serwera przez masowe wysyłanie zapytań w krótkim czasie.',
            example: 'Przykład: 1 czerwca 2022 roku doszło do ataku na serwery dużej firmy hostingowej, co spowodowało przerwę w działaniu usług.',
            prevention: 'Porady prewencyjne:',
            tip1: 'Używaj zapór sieciowych (firewall).',
            tip2: 'Korzystaj z usług ochrony DDoS.',
            tip3: 'Monitoruj ruch sieciowy na bieżąco.'
          },
          phishing: {
            title: 'Phishing',
            description: 'Phishing polega na podszywaniu się pod zaufane osoby lub instytucje w celu wyłudzenia danych.',
            example: 'Przykład: Otrzymanie fałszywego e-maila od "banku" z prośbą o podanie danych logowania.',
            prevention: 'Porady prewencyjne:',
            tip1: 'Nie klikaj w podejrzane linki.',
            tip2: 'Sprawdzaj nadawcę wiadomości.',
            tip3: 'Korzystaj z uwierzytelniania dwuskładnikowego.'
          },
          malvertising: {
            title: 'Malvertising',
            description: 'Malvertising to wykorzystanie reklam online do rozprzestrzeniania złośliwego oprogramowania.',
            example: 'Przykład: Kliknięcie na reklamę, która prowadzi do zainfekowanej strony.',
            prevention: 'Porady prewencyjne:',
            tip1: 'Blokuj reklamy za pomocą oprogramowania antywirusowego.',
            tip2: 'Używaj przeglądarek z wbudowaną ochroną.',
            tip3: 'Aktualizuj oprogramowanie regularnie.'
          },
          mitm: {
            title: 'Ataki Man-in-the-Middle (MITM)',
            description: 'Ataki MITM polegają na przechwytywaniu komunikacji między dwiema stronami bez ich wiedzy.',
            example: 'Przykład: Podsłuchiwanie połączenia podczas korzystania z niezabezpieczonego Wi-Fi.',
            prevention: 'Porady prewencyjne:',
            tip1: 'Korzystaj z VPN podczas łączenia się z publicznym Wi-Fi.',
            tip2: 'Unikaj otwartych sieci Wi-Fi.',
            tip3: 'Sprawdzaj certyfikaty SSL na stronach internetowych.'
          }
        }
      },
      en: {
        translation: {
          header: {
            title: 'Cybersecurity Threats',
            subtitle: 'Learn about the most dangerous attacks and how to defend yourself.'
          },
          menu: {
            phishing: 'Phishing',
            ddos: 'DDoS Attack',
            malvertising: 'Malvertising',
            mitm: 'MITM Attacks',
            language: 'Language:',
            theme: 'Theme:',
            fontSize: 'Font Size:'
          },
          theme: {
            light: 'Light',
            dark: 'Dark',
            highContrast: 'High Contrast'
          },
          fontSize: {
            small: 'Small',
            medium: 'Medium',
            large: 'Large'
          },
          ddos: {
            title: 'DDoS Attack',
            description: 'A DDoS attack is an attempt to overload a servers resources by sending massive requests in a short time.',
            example: 'Example: On June 1, 2022, a large hosting companys servers were attacked, causing service interruptions.',
            prevention: 'Preventive tips:',
            tip1: 'Use firewalls.',
            tip2: 'Employ DDoS protection services.',
            tip3: 'Monitor network traffic regularly.'
          },
          phishing: {
            title: 'Phishing',
            description: 'Phishing involves impersonating trusted individuals or institutions to steal data.',
            example: 'Example: Receiving a fake email from a "bank" requesting login credentials.',
            prevention: 'Preventive tips:',
            tip1: 'Do not click suspicious links.',
            tip2: 'Verify the sender.',
            tip3: 'Use two-factor authentication.'
          },
          malvertising: {
            title: 'Malvertising',
            description: 'Malvertising involves using online ads to spread malware.',
            example: 'Example: Clicking on an ad that leads to an infected website.',
            prevention: 'Preventive tips:',
            tip1: 'Block ads with antivirus software.',
            tip2: 'Use browsers with built-in protection.',
            tip3: 'Regularly update your software.'
          },
          mitm: {
            title: 'Man-in-the-Middle (MITM) Attacks',
            description: 'MITM attacks involve intercepting communication between two parties without their knowledge.',
            example: 'Example: Eavesdropping on a connection when using unsecured Wi-Fi.',
            prevention: 'Preventive tips:',
            tip1: 'Use a VPN when connecting to public Wi-Fi.',
            tip2: 'Avoid open Wi-Fi networks.',
            tip3: 'Check SSL certificates on websites.'
          }
        }
      },
      de: {
        translation: {
          header: {
            title: 'Bedrohungen der Cybersicherheit',
            subtitle: 'Erfahren Sie mehr über die gefährlichsten Angriffe und wie Sie sich verteidigen können.'
          },
          menu: {
            phishing: 'Phishing',
            ddos: 'DDoS-Angriff',
            malvertising: 'Malvertising',
            mitm: 'MITM-Angriffe',
            language: 'Sprache:',
            theme: 'Thema:',
            fontSize: 'Schriftgröße:'
          },
          theme: {
            light: 'Licht',
            dark: 'Dunkel',
            highContrast: 'Hoher Kontrast'
          },
          fontSize: {
            small: 'Klein',
            medium: 'Medium',
            large: 'Groß'
          },
          ddos: {
            title: 'DDoS-Angriff',
            description: 'Ein DDoS-Angriff ist ein Versuch, die Ressourcen eines Servers durch das Senden massiver Anfragen in kurzer Zeit zu überlasten.',
            example: 'Beispiel: Am 1. Juni 2022 wurden die Server eines großen Hosting-Unternehmens angegriffen, was zu Dienstunterbrechungen führte.',
            prevention: 'Vorbeugende Tipps:',
            tip1: 'Verwenden Sie Firewalls.',
            tip2: 'Nutzen Sie DDoS-Schutzdienste.',
            tip3: 'Überwachen Sie den Netzwerkverkehr regelmäßig.'
          },
          phishing: {
            title: 'Phishing',
            description: 'Beim Phishing gibt man sich als vertrauenswürdige Person oder Institution aus, um Daten zu stehlen.',
            example: 'Beispiel: Empfang einer gefälschten E-Mail von einer „Bank“, in der Anmeldeinformationen angefordert werden.',
            prevention: 'Vorbeugende Tipps:',
            tip1: 'Klicken Sie nicht auf verdächtige Links.',
            tip2: 'Überprüfen Sie den Absender.',
            tip3: 'Verwenden Sie die Zwei-Faktor-Authentifizierung.'
          },
          malvertising: {
            title: 'Malvertising',
            description: 'Bei Malvertising handelt es sich um die Verwendung von Online-Werbung zur Verbreitung von Schadsoftware.',
            example: 'Beispiel: Klicken Sie auf eine Anzeige, die zu einer infizierten Website führt.',
            prevention: 'Vorbeugende Tipps:',
            tip1: 'Blockieren Sie Werbung mit Antivirensoftware.',
            tip2: 'Verwenden Sie Browser mit integriertem Schutz.',
            tip3: 'Aktualisieren Sie Ihre Software regelmäßig.'
          },
          mitm: {
            title: 'Man-in-the-Middle-Angriffe (MITM).',
            description: 'Bei MITM-Angriffen wird die Kommunikation zwischen zwei Parteien ohne deren Wissen abgefangen.',
            example: 'Beispiel: Abhören einer Verbindung bei Verwendung ungesicherten WLANs.',
            prevention: 'Vorbeugende Tipps:',
            tip1: 'Verwenden Sie ein VPN, wenn Sie eine Verbindung zu öffentlichem WLAN herstellen.',
            tip2: 'Vermeiden Sie offene Wi-Fi-Netzwerke.',
            tip3: 'Überprüfen Sie SSL-Zertifikate auf Websites.'
          }
        }
      },
  ar: {
    translation: {
      header: {
        title: 'تهديدات الأمن السيبراني',
        subtitle: 'تعرف على أخطر الهجمات وطرق الحماية.'
      },
      menu: {
        phishing: 'التصيد الاحتيالي',
        ddos: 'هجوم DDoS',
        malvertising: 'الإعلانات الضارة',
        mitm: 'هجمات MITM',
        language: 'اللغة:',
        theme: 'السمة:',
        fontSize: 'حجم الخط:'
      },
      theme: {
        light: 'فاتح',
        dark: 'داكن',
        highContrast: 'تباين عالٍ'
      },
      fontSize: {
        small: 'صغير',
        medium: 'متوسط',
        large: 'كبير'
      },
      ddos: {
        title: 'هجوم DDoS',
        description: 'هجوم DDoS هو محاولة لإغراق موارد الخادم عن طريق إرسال طلبات مكثفة في وقت قصير.',
        example: 'مثال: في 1 يونيو 2022، حدث هجوم على خوادم شركة استضافة كبيرة مما أدى إلى انقطاع الخدمات.',
        prevention: 'نصائح وقائية:',
        tip1: 'استخدم جدران الحماية (firewall).',
        tip2: 'استخدم خدمات الحماية من DDoS.',
        tip3: 'راقب حركة المرور الشبكية باستمرار.'
      },
      phishing: {
        title: 'التصيد الاحتيالي',
        description: 'التصيد الاحتيالي يتمثل في انتحال شخصيات أو مؤسسات موثوقة للحصول على البيانات.',
        example: 'مثال: تلقي بريد إلكتروني مزيف من "البنك" يطلب معلومات تسجيل الدخول.',
        prevention: 'نصائح وقائية:',
        tip1: 'لا تنقر على الروابط المشبوهة.',
        tip2: 'تحقق من مرسل الرسالة.',
        tip3: 'استخدم المصادقة الثنائية.'
      },
      malvertising: {
        title: 'الإعلانات الضارة',
        description: 'الإعلانات الضارة تستغل الإعلانات الإلكترونية لنشر البرامج الضارة.',
        example: 'مثال: النقر على إعلان يؤدي إلى موقع مصاب.',
        prevention: 'نصائح وقائية:',
        tip1: 'حظر الإعلانات باستخدام برامج مكافحة الفيروسات.',
        tip2: 'استخدم متصفحات بها حماية مدمجة.',
        tip3: 'قم بتحديث البرامج بانتظام.'
      },
      mitm: {
        title: 'هجمات MITM',
        description: 'هجمات MITM تتمثل في اعتراض الاتصال بين طرفين دون علمهما.',
        example: 'مثال: التنصت على الاتصال عند استخدام شبكة Wi-Fi غير آمنة.',
        prevention: 'نصائح وقائية:',
        tip1: 'استخدم VPN عند الاتصال بشبكات Wi-Fi العامة.',
        tip2: 'تجنب الشبكات المفتوحة.',
        tip3: 'تحقق من شهادات SSL على المواقع الإلكترونية.'
      }
    }
  }, 
  ru: {
    translation: {
      header: {
        title: 'Угрозы кибербезопасности',
        subtitle: 'Узнайте о самых опасных атаках и способах защиты.'
      },
      menu: {
        phishing: 'Фишинг',
        ddos: 'Атака DDoS',
        malvertising: 'Злонамеренная реклама',
        mitm: 'Атаки MITM',
        language: 'Язык:',
        theme: 'Тема:',
        fontSize: 'Размер шрифта:'
      },
      theme: {
        light: 'Светлая',
        dark: 'Тёмная',
        highContrast: 'Высокая контрастность'
      },
      fontSize: {
        small: 'Маленький',
        medium: 'Средний',
        large: 'Большой'
      },
      ddos: {
        title: 'Атака DDoS',
        description: 'Атака DDoS - это попытка перегрузить сервер, отправляя множество запросов за короткое время.',
        example: 'Пример: 1 июня 2022 года была совершена атака на серверы крупной хостинговой компании, что привело к сбоям в работе услуг.',
        prevention: 'Советы по предотвращению:',
        tip1: 'Используйте межсетевые экраны (firewall).',
        tip2: 'Пользуйтесь услугами защиты от DDoS.',
        tip3: 'Постоянно мониторьте сетевой трафик.'
      },
      phishing: {
        title: 'Фишинг',
        description: 'Фишинг - это мошенничество, при котором злоумышленники выдают себя за доверенные лица или организации с целью кражи данных.',
        example: 'Пример: Получение поддельного письма от "банка" с запросом данных для входа.',
        prevention: 'Советы по предотвращению:',
        tip1: 'Не кликайте по подозрительным ссылкам.',
        tip2: 'Проверяйте отправителя сообщений.',
        tip3: 'Используйте двухфакторную аутентификацию.'
      },
      malvertising: {
        title: 'Злонамеренная реклама',
        description: 'Злонамеренная реклама используется для распространения вредоносного ПО через онлайн-рекламу.',
        example: 'Пример: Нажатие на рекламу, которая ведёт на заражённый сайт.',
        prevention: 'Советы по предотвращению:',
        tip1: 'Блокируйте рекламу с помощью антивирусного ПО.',
        tip2: 'Используйте браузеры с встроенной защитой.',
        tip3: 'Регулярно обновляйте программное обеспечение.'
      },
      mitm: {
        title: 'Атаки MITM',
        description: 'Атаки MITM - это перехват коммуникаций между двумя сторонами без их ведома.',
        example: 'Пример: Подслушивание соединения при использовании незащищённого Wi-Fi.',
        prevention: 'Советы по предотвращению:',
        tip1: 'Используйте VPN при подключении к публичному Wi-Fi.',
        tip2: 'Избегайте открытых сетей Wi-Fi.',
        tip3: 'Проверяйте SSL-сертификаты на сайтах.'
      }
    }
  } 
}
  }, (err, t) => {
    if (err) return console.error(err);
    updateContent();
  });
  
  function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      element.textContent = i18next.t(key);
    });
  }
  
  document.getElementById('language-select').addEventListener('change', (event) => {
    const language = event.target.value;
    i18next.changeLanguage(language, updateContent);
  });