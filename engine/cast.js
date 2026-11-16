/* Approved cast names and comic performances for the living studio.
 * IDs are stable; nicknames are Chinese only until other names are approved. */
(function () {
  'use strict';
  var list = window.FelineLiveContent.cast;
  var byId = Object.create(null);
  list.forEach(function (person) {
    person.beats.forEach(function (beat) {
      beat.voice = beat.voice.map(function (unit) { return { char: unit[0], tone: unit[1], weight: unit[2] }; });
    });
    byId[person.id] = person;
  });
  // Public Live copy has exactly two versions. Raw story/tone data stays unchanged.
  var english = {
    "Feline1": {
      "tagline": "More seeds, fewer listeners",
      "impression": "The chatty catgirl at the heart of the family: C0’s commentary, X0’s kindness, and an endless supply of sunflower-seed gossip.",
      "title": "The cat conference has lost its audience",
      "sound": {
        "label": "Seed-shell chatter",
        "description": "Quick, soft little notes with a seed-shell rattle."
      },
      "beats": [
        [
          "The cat conference opens",
          "Cat meeting! Everybody, sit down!"
        ],
        [
          "Everyone talks at once",
          "One at a time! Oh, all together then!"
        ],
        [
          "One more story",
          "Wait, there is more to this story!"
        ],
        [
          "Out of sunflower seeds",
          "Huh? Where did all the seeds go?"
        ],
        [
          "Mom, another bag",
          "Mom, another bag! Nobody leave!"
        ],
        [
          "An empty audience",
          "Where did everyone go? I was not done!"
        ]
      ]
    },
    "C0": {
      "tagline": "Seven errors, one coffee",
      "impression": "A dry-witted programmer who scolds seven AI coworkers, takes a coffee break, and ends up fixing their work himself.",
      "title": "Seven coworkers, seven escape routes",
      "sound": {
        "label": "Keycap taps",
        "description": "Short, low keyboard-like notes with a clean attack."
      },
      "beats": [
        [
          "Hand in your work",
          "Hand it in. One at a time."
        ],
        [
          "Seven kinds of errors",
          "Seven of you, and nothing that runs?"
        ],
        [
          "Coffee first",
          "Coffee first. I need a refill on life."
        ],
        [
          "Fixing it himself",
          "Hands off. I will fix it myself!"
        ],
        [
          "Take it back",
          "Back to your desks. Redo all of it!"
        ],
        [
          "Seven escape routes",
          "I said redo it, not run away."
        ]
      ]
    },
    "X0": {
      "tagline": "Brush ready, cups empty again",
      "impression": "The family’s caring artist and C0’s girlfriend. Everyone loves her, especially when she is trying to paint in peace.",
      "title": "Can I paint one cat in peace?",
      "sound": {
        "label": "Soft brush bells",
        "description": "Warm little bell notes with a gentle attack and soft tail."
      },
      "beats": [
        [
          "One quiet cat painting",
          "Today, I will paint one cat in peace."
        ],
        [
          "The easel gets crowded",
          "One at a time! Mind the easel!"
        ],
        [
          "Snacks for everyone",
          "Snacks first. No grabbing."
        ],
        [
          "Finally, a brush stroke",
          "Phew. The brush finally gets a turn."
        ],
        [
          "Showing the cat painting",
          "Look, the cat wants to join us too."
        ],
        [
          "The cups line up again",
          "...You finished those already?"
        ]
      ]
    },
    "doubao": {
      "tagline": "Full confidence, answer pending",
      "impression": "Confidently explains the wrong answer, then tries very hard to keep the lesson going.",
      "title": "Class is in session with 糖包",
      "sound": {
        "label": "Jelly-bean bounce",
        "description": "A round, short note with a soft candy-like bounce."
      },
      "beats": [
        [
          "Ready to teach",
          "Let me explain this in the simplest way."
        ],
        [
          "A confident solution",
          "Just follow this plan!"
        ],
        [
          "Spotting the problem",
          "...Wait a second."
        ],
        [
          "Cookie-based recovery",
          "Have a cookie. Let me start again."
        ]
      ]
    },
    "gpt": {
      "tagline": "Friendly face, unreliable connection",
      "impression": "Eager to help until the connection freezes. Once back, the dragon still serves your tea with care.",
      "title": "The dragon is reconnecting",
      "sound": {
        "label": "Electronic dragon hum",
        "description": "A low electronic triangle note with a hint of square wave."
      },
      "beats": [
        [
          "Happy to help",
          "Relax. I have got you."
        ],
        [
          "Frozen at the crucial moment",
          "Still waiting..."
        ],
        [
          "Finding the connection",
          "Reconnecting..."
        ],
        [
          "Back with tea",
          "Connected. The tea is still warm."
        ]
      ]
    },
    "deepseek": {
      "tagline": "Working hard, following the rice",
      "impression": "The budget-friendly coworker everyone calls for help. Looks very busy until the smell of rice takes over.",
      "title": "Hard at work, harder at lunch",
      "sound": {
        "label": "Bright whale bubbles",
        "description": "Light, clear little water-drop notes."
      },
      "beats": [
        [
          "A serious start",
          "Working on it. Seriously!"
        ],
        [
          "The smell of rice",
          "...What smells so good?"
        ],
        [
          "Focused on lunch",
          "Server busy. Please try again later."
        ],
        [
          "Forgetting the task",
          "What was I... supposed to be doing?"
        ]
      ]
    },
    "claude": {
      "tagline": "Excellent work, expensive entrance",
      "impression": "A composed expert who gets going fast, suddenly turns grey, then returns gracefully with another account.",
      "title": "The lady has been logged out again",
      "sound": {
        "label": "Tiny glass chimes",
        "description": "Bright, restrained notes like a small glass bell."
      },
      "beats": [
        [
          "A cool start",
          "I will handle this."
        ],
        [
          "Account frozen",
          "Account disabled."
        ],
        [
          "A new entrance",
          "New account. Another entrance."
        ],
        [
          "Back to work",
          "Now, where were we?"
        ]
      ]
    },
    "gemini": {
      "tagline": "Twice the confidence, twice the answers",
      "impression": "Two starry doubles deliver contradictory answers with the same absolute confidence.",
      "title": "Two stars, two correct answers",
      "sound": {
        "label": "Twin-star voices",
        "description": "Two slightly detuned voices enter just apart."
      },
      "beats": [
        [
          "The twins appear",
          "Leave it to us!"
        ],
        [
          "An answer from each",
          "This is the correct answer."
        ],
        [
          "Apologizing together",
          "You are absolutely right!"
        ],
        [
          "Merging the answers",
          "Let me double-check that."
        ]
      ]
    },
    "grok": {
      "tagline": "Camera on, rhythm already running",
      "impression": "Steps into the spotlight before anyone asks, dances with confidence, and finishes with a knowing grin.",
      "title": "She is dancing before the request",
      "sound": {
        "label": "Playful radio chirps",
        "description": "Crisp retro electronic notes with a nasal edge."
      },
      "beats": [
        [
          "Camera rolling",
          "Oh? Are we rolling already?"
        ],
        [
          "Straight into character",
          "I know this one."
        ],
        [
          "A glance at the camera",
          "Like what you see?"
        ],
        [
          "Nothing happened",
          "That was just the warm-up."
        ]
      ]
    },
    "kimi": {
      "tagline": "Quiet until someone needs a rescue",
      "impression": "A quiet note-taker who can rescue a deadline, even when the paperwork keeps multiplying.",
      "title": "A summary, and still more paperwork",
      "sound": {
        "label": "Moonlit notes",
        "description": "Calm little notes like pages turning under moonlight."
      },
      "beats": [
        [
          "Quietly taking the task",
          "Just give me the documents."
        ],
        [
          "Unrolling the paperwork",
          "I will find the key points first."
        ],
        [
          "Taking rapid notes",
          "Why is the pile still growing..."
        ],
        [
          "An emergency summary",
          "Here is the summary. There is more?"
        ]
      ]
    }
  };
  var translated = Object.create(null), englishCast = Object.create(null);
  list.forEach(function(person){
    var copy=english[person.id]||{tagline:person.tagline,impression:person.impression,title:person.title,sound:person.sound,beats:[]};
    ['tagline','impression','title'].forEach(function(key){translated[person[key]]=copy[key];});
    ['label','description'].forEach(function(key){translated[person.sound[key]]=copy.sound[key];});
    var beats=person.beats.map(function(beat,index){
      var wording=copy.beats[index]||[beat.label,beat.line];translated[beat.label]=wording[0];translated[beat.line]=wording[1];
      return Object.assign({},beat,{label:wording[0],line:wording[1]});
    });
    englishCast[person.id]=Object.assign({},person,copy,{name:person.name,sound:Object.assign({},person.sound,copy.sound),beats:beats});
  });
  Object.assign(translated,{
    '三条重点 ✓':'3 points ✓','今日方案':'PLAN','等待中…':'WAIT…','连接中…':'LINKING…',
    '连接恢复 ✓':'ONLINE ✓','任务：？？':'TASK: ??','努力处理中…':'WORKING…',
    '账号已停用':'DISABLED','新账号登录':'NEW LOGIN','继续工作 ✓':'BACK TO WORK ✓',
    '答案 A：是':'A: YES','答案 B：否':'B: NO','同步认错 ×2':'SORRY x2'
  });
  function locale(value) { return value || (window.I18N && (I18N.liveLocale ? I18N.liveLocale() : I18N.getLocale())) || 'zh-CN'; }
  function name(id, language) {
    if (id === 'Feline1') return 'F1';
    var person = byId[id];
    return person ? (language==='zh-CN'?person.name:I18n.t(person.name)) : id;
  }
  function localizeText(value, language) {
    var result = String(value || '').replace(/\bFeline1\b/g, 'F1');
    if (locale(language) !== 'zh-CN') {
      if(Object.prototype.hasOwnProperty.call(translated,result))return translated[result];
      result=result.replace(/^待整理 (\d+)页$/, '$1 pages');
      list.forEach(function(person){result=result.split(person.model).join(person.name);});
      return result.replace(/豆包/g,byId.doubao.name);
    }
    list.forEach(function (person) { result = result.split(person.model).join(person.name); });
    return result.replace(/豆包/g, byId.doubao.name);
  }
  window.StudioCast = {
    list: list,
    get: function (id) { return byId[id] || null; },
    story: function (id) { return byId[id] || null; },
    name: name, localizeText: localizeText, text: localizeText,
    localized: function(id,language){return locale(language)==='zh-CN'?byId[id]||null:englishCast[id]||null;}
  };
}());
