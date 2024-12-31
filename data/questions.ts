interface Question {
    id: string;
    text: string;
    options: {
        text: string;
        nextId?: string;
        result?: string;
    }[];
}

export const questions: Record<string, Question> = {
    'start': {
        id: 'start',
        text: 'Neden bir programlama dili öğrenmek istiyorsun?',
        options: [
            {
                text: 'İş bulmak/Para kazanmak için',
                nextId: 'platform_choice'
            },
            {
                text: 'Kendimi geliştirmek için',
                nextId: 'platform_choice'
            },
            {
                text: 'Fikrimi projeye dönüştürmek için',
                nextId: 'platform_choice'
            },
            {
                text: 'Çocuklarım için',
                nextId: 'kids_path'
            },
            {
                text: 'Karar veremedim bir tane öner',
                result: 'JavaScript <span class="text-sm text-green-600"><br>Önkoşullar: HTML, CSS</span>'
            }
        ]
    },
    'platform_choice': {
        id: 'platform_choice',
        text: 'Hangi alana yönelik yazılım geliştireceksiniz?',
        options: [
            {
                text: 'Bir fikrim yok, sadece başlamak istiyorum',
                result: 'JavaScript <span class="text-sm text-green-600"><br>Önkoşullar: HTML, CSS</span>'
            },
            {
                text: 'Yapay Zeka (AI) / Makine Öğrenimi (ML)',
                nextId: 'ai_ml_path'
            },
            {
                text: 'Veri Bilimi ve Büyük Veri',
                nextId: 'data_path'
            },
            {
                text: 'Bulut Bilişim ve DevOps',
                nextId: 'cloud_path'
            },
            {
                text: 'Web Geliştirme',
                nextId: 'web_path'
            },
            {
                text: 'Mobil Uygulama Geliştirme',
                nextId: 'mobile_path'
            },
            {
                text: 'Oyun Geliştirme',
                nextId: 'game_path'
            },
            {
                text: 'Nesnelerin İnteneti (IoT)',
                nextId: 'iot_path'
            }
        ]
    },
    'ai_ml_path': {
        id: 'ai_ml_path',
        text: 'Yapay Zeka (AI) / Makine Öğrenimi (ML) alanında ne yapmak istiyorsunuz?',
        options: [
            {
                text: 'Şirketimin karar verme süreçlerini hızlandırmak',
                result: 'Python'
            },
            {
                text: 'Veri analizi ve istatistiksel modelleme',
                result: 'R'
            },
            {
                text: 'Yüksek performanslı bilimsel hesaplama',
                result: 'Julia'
            },
            {
                text: 'Makine öğrenimi uygulamaları',
                result: 'Python veya Java'
            }
        ]
    },
    'data_path': {
        id: 'data_path',
        text: 'Veri Bilimi ve Büyük Veri alanında ne yapmak istersiniz?',
        options: [
            {
                text: 'Veri analizi ve görselleştirme',
                result: 'Python veya R'
            },
            {
                text: 'Şirketimin verilerini görselleştirmek ve ileriye dönük analizler yapmak',
                result: 'Python veya Tableau/Power BI gibi iş zekası araçları'
            },
            {
                text: 'Veritabanı sorgulama ve yönetimi',
                result: 'SQL'
            },
            {
                text: 'Büyük verileri işleme',
                result: 'Scala ve Apache Spark'
            }
        ]
    },
    'cloud_path': {
        id: 'cloud_path',
        text: 'Bulut Bilişim ve DevOps alanında ne yapmak istersiniz?',
        options: [
            {
                text: 'Bulut tabanlı uygulamalar geliştirmek',
                result: 'Python / Go / Java / C# / JavaScript'
            }
        ]
    },
    'web_path': {
        id: 'web_path',
        text: 'Web geliştirme alanında ne yapmak istersiniz?',
        options: [
            {
                text: 'Front-end (Web arayüzü)',
                result: 'JavaScript/React'
            },
            {
                text: 'Back-end (Web altyapısı)',
                result: 'Python/Node.js'
            },
            {
                text: 'Full-stack',
                result: 'JavaScript/TypeScript'
            }
        ]
    },
    'mobile_path': {
        id: 'mobile_path',
        text: 'Hangi mobil platform?',
        options: [
            {
                text: 'iOS',
                result: 'Swift'
            },
            {
                text: 'Android',
                result: 'Kotlin'
            },
            {
                text: 'Her ikisi de',
                result: 'React Native/Flutter'
            }
        ]
    },
    'game_path': {
        id: 'game_path',
        text: 'Ne tür bir oyun geliştirmek istiyorsunuz?',
        options: [
            {
                text: '3A (AAA) olarak ifade edilen oyunlar (GTA, Red Dead Redemption, Battlefield, God of War vb)',
                result: 'C++ / Unreal Engine'
            },
            {
                text: 'Konsol oyunları',
                result: 'C++ / Unreal Engine'
            },
            {
                text: 'Mobil oyunlar',
                result: 'C# / Unity'
            },
            {
                text: 'Web arayüzlü oyunlar',
                result: 'JavaScript'
            },
            {
                text: 'Çocuklar için oyunlar',
                result: 'Scratch'
            },
            {
                text: 'AR/VR alanında oyunlar ve uygulamalar',
                result: 'C# / Unity'
            },
        ]
    },
    'iot_path': {
        id: 'iot_path',
        text: 'Nesnelerin İnterneti ile neler yapmak istersiniz?',
        options: [
            {
                text: 'Akıllı ev sistemleri programlamak',
                result: 'C / Python'
            },
            {
                text: 'Elektronik kartlar ve mikroişlemcilere program yazmak',
                result: 'C'
            },
            {
                text: 'Ardunio veya Rasperry Pi gibi kartlara özel programlar yazmak',
                result: 'C / Python'
            },
            {
                text: 'Endüstriyel yüksek performanslı gömülü sistemler',
                result: 'C++ / Rust'
            }
        ]
    },
    'kids_path': {
        id: 'kids_path',
        text: 'Çocuğunuzun yaş aralığı nedir?',
        options: [
            {
                text: '8-12 yaş',
                result: 'Scratch'
            },
            {
                text: '12-15 yaş',
                result: 'Python'
            },
            {
                text: '15+ yaş',
                result: 'JavaScript'
            }
        ]
    }
}

export type QuestionId = keyof typeof questions;