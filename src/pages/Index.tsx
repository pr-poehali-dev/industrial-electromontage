import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Zap',
      title: 'Электромонтаж промышленных объектов',
      description: 'Полный цикл работ по монтажу электрооборудования на производственных площадках'
    },
    {
      icon: 'Building2',
      title: 'Проектирование электросетей',
      description: 'Разработка проектной документации с учетом всех требований и нормативов'
    },
    {
      icon: 'Gauge',
      title: 'Монтаж КИПиА',
      description: 'Установка контрольно-измерительных приборов и систем автоматизации'
    },
    {
      icon: 'Shield',
      title: 'Пусконаладочные работы',
      description: 'Комплексное тестирование и настройка электрооборудования'
    },
    {
      icon: 'Settings',
      title: 'Модернизация электроустановок',
      description: 'Обновление и усовершенствование существующих систем электроснабжения'
    },
    {
      icon: 'Wrench',
      title: 'Техническое обслуживание',
      description: 'Плановое и аварийное обслуживание электротехнического оборудования'
    }
  ];

  const projects = [
    {
      title: 'Электромонтаж завода автокомпонентов',
      image: 'https://cdn.poehali.dev/projects/395ee2e1-93d5-40f3-97d9-c356fd116689/files/2bc0a1ab-44be-40d9-804a-10ae7ff47543.jpg',
      power: '2500 кВт',
      duration: '4 месяца',
      voltage: '10 кВ',
      description: 'Комплексный электромонтаж производственного комплекса площадью 15000 м²'
    },
    {
      title: 'Монтаж распределительных устройств',
      image: 'https://cdn.poehali.dev/projects/395ee2e1-93d5-40f3-97d9-c356fd116689/files/ef53e634-5f1c-4b92-a99c-05e9306b7474.jpg',
      power: '1200 кВт',
      duration: '2 месяца',
      voltage: '0.4 кВ',
      description: 'Установка современных электрических панелей управления производством'
    },
    {
      title: 'Подстанция складского комплекса',
      image: 'https://cdn.poehali.dev/projects/395ee2e1-93d5-40f3-97d9-c356fd116689/files/1947fea3-f1ba-43c4-be24-c6cdad7a0d18.jpg',
      power: '3500 кВт',
      duration: '5 месяцев',
      voltage: '10 кВ',
      description: 'Строительство и оснащение трансформаторной подстанции логистического центра'
    }
  ];

  const blogPosts = [
    {
      title: 'Современные требования к промышленному электромонтажу',
      date: '15 ноября 2024',
      excerpt: 'Обзор новых стандартов и норм в области электротехнических работ на промышленных объектах'
    },
    {
      title: 'Выбор кабельных систем для производства',
      date: '3 ноября 2024',
      excerpt: 'Рекомендации по подбору оптимальных кабельных решений с учетом нагрузок и условий эксплуатации'
    },
    {
      title: 'Системы безопасности в электроустановках',
      date: '28 октября 2024',
      excerpt: 'Комплексный подход к обеспечению безопасности персонала при работе с электрооборудованием'
    }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-secondary">ЭлектроМонтаж</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('blog')} className="text-foreground hover:text-primary transition-colors">Блог</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">Связаться с нами</Button>
          </nav>
        </div>
      </header>

      <section id="home" className="py-20 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-4 bg-accent hover:bg-accent">Профессиональный электромонтаж</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Электромонтажные работы промышленного масштаба
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Полный спектр услуг по проектированию, монтажу и обслуживанию электротехнического оборудования для промышленных предприятий
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection('portfolio')} className="bg-accent hover:bg-accent/90">
                Наши проекты
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="bg-white text-secondary hover:bg-white/90">
                Узнать больше
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-white/80">лет на рынке</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">200+</div>
                <div className="text-white/80">завершенных проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-white/80">специалистов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения в области промышленного электромонтажа
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио проектов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реализованные объекты с техническими характеристиками
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <Icon name="Zap" size={14} />
                      {project.power}
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Icon name="Clock" size={14} />
                      {project.duration}
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Icon name="Gauge" size={14} />
                      {project.voltage}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на электромонтажных работах промышленного масштаба с 2009 года. Наша команда состоит из высококвалифицированных инженеров и монтажников, имеющих богатый опыт работы на крупнейших промышленных объектах.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Компания имеет все необходимые лицензии и допуски для выполнения электромонтажных работ любой сложности. Мы используем только сертифицированное оборудование и материалы от ведущих мировых производителей.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Icon name="Award" className="text-accent" size={24} />
                      <CardTitle className="text-lg">Сертификаты</CardTitle>
                    </div>
                    <CardDescription>ISO 9001, СРО</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" className="text-accent" size={24} />
                      <CardTitle className="text-lg">Специалисты</CardTitle>
                    </div>
                    <CardDescription>50+ профессионалов</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <Icon name="CheckCircle" size={32} />
                    <CardTitle>Гарантия качества</CardTitle>
                    <CardDescription className="text-primary-foreground/80">До 5 лет на все работы</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="Clock" size={32} className="text-accent" />
                    <CardTitle>Точные сроки</CardTitle>
                    <CardDescription>Выполнение по графику</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card>
                  <CardHeader>
                    <Icon name="Shield" size={32} className="text-accent" />
                    <CardTitle>Безопасность</CardTitle>
                    <CardDescription>Соблюдение всех норм</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-accent text-accent-foreground">
                  <CardHeader>
                    <Icon name="Headphones" size={32} />
                    <CardTitle>Поддержка 24/7</CardTitle>
                    <CardDescription className="text-accent-foreground/80">Аварийная служба</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полезные статьи и новости из мира электротехники
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Icon name="Calendar" size={16} />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="px-0 group-hover:gap-2 transition-all">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку, и наш специалист свяжется с вами в ближайшее время для обсуждения вашего проекта
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">info@electromontazh.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">Москва, ул. Промышленная, д. 25, офис 301</div>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Заявка на консультацию</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Опишите ваш проект" rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" size={24} />
                <span className="text-xl font-bold">ЭлектроМонтаж</span>
              </div>
              <p className="text-white/80">
                Профессиональный электромонтаж промышленных объектов
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/80">
                <li>Электромонтаж</li>
                <li>Проектирование</li>
                <li>КИПиА</li>
                <li>Обслуживание</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Блог</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@electromontazh.ru</li>
                <li>Москва, ул. Промышленная, 25</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 ЭлектроМонтаж. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
