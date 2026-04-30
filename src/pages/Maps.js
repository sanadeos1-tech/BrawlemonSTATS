import React, { useState } from 'react';
import '../styles/Maps.css';

function Maps() {
  const [selectedMode, setSelectedMode] = useState('gem-grab');

  const modes = [
    {
      id: 'gem-grab',
      name: '💎 Gem Grab',
      description: 'Командный режим, где нужно собрать 10 самоцветов раньше противника.',
      recommended: ['Frank', 'Bull', 'Shelly', 'Nita'],
      tips: [
        'Защищайте носителя самоцветов',
        'Используйте танков для контроля середины',
        'Слаженная работа в команде - ключ к победе',
        'Избегайте разделения на карте'
      ]
    },
    {
      id: 'showdown',
      name: '⚔️ Showdown',
      description: 'Королевская битва - каждый за себя. Последний выживший побеждает.',
      recommended: ['Rosa', 'Bull', 'Spike', 'Crow'],
      tips: [
        'Собирайте боеприпасы и питание',
        'Избегайте открытых пространств',
        'Используйте укрытия стратегически',
        'Лучше избегать боев в начале игры'
      ]
    },
    {
      id: 'bounty',
      name: '🎯 Bounty',
      description: 'Команда с наибольшим числом убийств побеждает. Ценится точность.',
      recommended: ['Colt', 'Brock', 'Piper', 'Bo'],
      tips: [
        'Выбирайте снайперских персонажей',
        'Контролируйте периметр карты',
        'Работайте в паре с союзниками',
        'Избегайте приближаться к врагам'
      ]
    },
    {
      id: 'heist',
      name: '🏦 Heist',
      description: 'Одна команда защищает сейф, другая пытается его взломать.',
      recommended: ['Bull', 'Crow', 'Shelly', 'Dynamike'],
      tips: [
        'Атакующей команде нужен высокий урон',
        'Защитникам нужно контролировать входы',
        'Координируйте атаки с командой',
        'Используйте специальные способности вовремя'
      ]
    },
    {
      id: 'brawl-ball',
      name: '⚽ Brawl Ball',
      description: 'Футбол в мире Brawl Stars. Забейте гол в ворота противника.',
      recommended: ['Shelly', 'Jessie', 'Rosa', 'Frank'],
      tips: [
        'Скорость передвижения - критична',
        'Используйте боковые маршруты',
        'Слаженная игра передач - залог победы',
        'Защищайте свои ворота активно'
      ]
    },
    {
      id: 'solo-sd',
      name: '🌑 Solo Showdown',
      description: 'Соревнование один на один. Побеждает самый сильный.',
      recommended: ['Piper', 'Colt', 'Crow', 'Spike'],
      tips: [
        'Сосредоточьтесь на одном противнике',
        'Используйте точность при стрельбе',
        'Контролируйте пространство вокруг себя',
        'Будьте готовы к отступлению'
      ]
    }
  ];

  const currentMode = modes.find(m => m.id === selectedMode);

  return (
    <div className="maps">
      <h1>🗺️ Режимы Игры</h1>
      <p className="subtitle">Рекомендации персонажей для каждого режима</p>

      <div className="mode-selector">
        {modes.map(mode => (
          <button
            key={mode.id}
            className={`mode-button ${selectedMode === mode.id ? 'active' : ''}`}
            onClick={() => setSelectedMode(mode.id)}
          >
            {mode.name}
          </button>
        ))}
      </div>

      {currentMode && (
        <div className="mode-details">
          <h2>{currentMode.name}</h2>
          <p className="mode-description">{currentMode.description}</p>

          <div className="recommendations-section">
            <h3>💪 Рекомендуемые Персонажи:</h3>
            <div className="recommended-brawlers">
              {currentMode.recommended.map((brawler, index) => (
                <span key={index} className="recommended-badge">
                  {brawler}
                </span>
              ))}
            </div>
          </div>

          <div className="tips-section">
            <h3>📋 Советы и Тактики:</h3>
            <ul className="tips-list">
              {currentMode.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Maps;
