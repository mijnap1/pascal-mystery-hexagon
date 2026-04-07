    const NS = "http://www.w3.org/2000/svg";

    const copy = {
      en: {
        heroEyebrow: "Interactive Geometry Story",
        heroTitle: "Pascal's Mysterious Hexagon Theorem",
        heroSubtitle: "A slow, step-by-step visual proof. Follow the points, build the hexagon, and watch the hidden line appear.",
        start: "Start Tutorial",
        switchLabel: "한국어 보기",
        outroEyebrow: "Sources",
        outroTitle: "Pascal's line revealed.",
        outroSubtitle: "The construction closes on a single straight line. Below are source slots you can replace later with real references and citations.",
        restart: "Replay Tutorial",
        home: "Back Home",
        randomize: "Randomize Points",
        legendTitle: "What is appearing",
        legendCurve: "Conic",
        legendHex: "Inscribed hexagon",
        legendGuide: "Extended opposite sides",
        legendPascal: "Pascal line",
        sources: [
          { label: "YouTube Shorts: Pascal's Mysterious Hexagon Theorem", url: "https://www.youtube.com/shorts/cVSGkp-MLIw" },
          { label: "Math Travel Blog: Pascal's Hexagon Theorem Proof", url: "https://mathtravel.tistory.com/entry/%ED%8C%8C%EC%8A%A4%EC%B9%BC%EC%9D%98-%EC%9C%A1%EA%B0%81%ED%98%95-%EC%A0%95%EB%A6%AC-%EC%A6%9D%EB%AA%85%EB%B0%A9%EB%B2%95" },
          { label: "YouTube: Pascal's Theorem (Hexagrammum Mysticum)", url: "https://www.youtube.com/watch?v=ALqPQSrSVks" }
        ],
        steps: [
          {
            step: "Step 1",
            title: "First, place point A and B",
            text: "Two points appear on the curve. Nothing special yet, just the beginning of the construction."
          },
          {
            step: "Step 2",
            title: "Now continue with C and D",
            text: "We keep choosing points on the same conic, building the rhythm of the hexagon."
          },
          {
            step: "Step 3",
            title: "Finally add E and F",
            text: "Now all six points A, B, C, D, E, F are fixed on one conic."
          },
          {
            step: "Step 4",
            title: "Connect them in order",
            text: "Join the points one by one, and the hexagon appears."
          },
          {
            step: "Step 5",
            title: "Extend one pair of opposite sides",
            text: "Take AB and DE, extend them, and mark their intersection."
          },
          {
            step: "Step 6",
            title: "Extend the second opposite pair",
            text: "Next extend BC and EF. A second outer intersection shows up."
          },
          {
            step: "Step 7",
            title: "Extend the last opposite pair",
            text: "Now extend CD and FA. The third intersection completes the pattern."
          },
          {
            step: "Step 8",
            title: "Look closely at the three intersections",
            text: "They do not scatter randomly. They line up."
          }
        ]
      },
      ko: {
        heroEyebrow: "인터랙티브 기하 이야기",
        heroTitle: "파스칼의 신비로운 육각형 정리",
        heroSubtitle: "점을 하나씩 따라가며 육각형을 만들고, 마지막에 숨어 있던 직선이 드러나는 과정을 천천히 살펴보세요.",
        start: "튜토리얼 시작",
        switchLabel: "View in English",
        outroEyebrow: "참고 자료",
        outroTitle: "파스칼의 직선이 선명하게 드러납니다.",
        outroSubtitle: "마지막에는 세 교점이 하나의 직선 위에 놓입니다. 아래 목록은 나중에 실제 출처와 참고 문헌으로 교체할 수 있도록 마련한 참고 자료 영역입니다.",
        restart: "튜토리얼 다시 보기",
        home: "홈으로 돌아가기",
        randomize: "점 배치 바꾸기",
        legendTitle: "현재 표시되는 요소",
        legendCurve: "원뿔곡선",
        legendHex: "내접 육각형",
        legendGuide: "연장한 마주보는 변",
        legendPascal: "파스칼의 직선",
        sources: [
          { label: "유튜브 쇼츠: 파스칼의 신비로운 육각형 정리", url: "https://www.youtube.com/shorts/cVSGkp-MLIw" },
          { label: "Math Travel 블로그: 파스칼의 육각형 정리 증명 방법", url: "https://mathtravel.tistory.com/entry/%ED%8C%8C%EC%8A%A4%EC%B9%BC%EC%9D%98-%EC%9C%A1%EA%B0%81%ED%98%95-%EC%A0%95%EB%A6%AC-%EC%A6%9D%EB%AA%85%EB%B0%A9%EB%B2%95" },
          { label: "유튜브: Pascal's Theorem (Hexagrammum Mysticum)", url: "https://www.youtube.com/watch?v=ALqPQSrSVks" }
        ],
        steps: [
          {
            step: "Step 1",
            title: "먼저 A와 B를 놓습니다",
            text: "곡선 위에 두 점이 나타납니다. 아직은 단순해 보이지만, 모든 구성은 여기서 시작됩니다."
          },
          {
            step: "Step 2",
            title: "이제 C와 D를 더합니다",
            text: "같은 원뿔곡선 위에서 점을 계속 잡아 가며 육각형의 형태를 준비합니다."
          },
          {
            step: "Step 3",
            title: "마지막으로 E와 F를 놓습니다",
            text: "이제 A, B, C, D, E, F 여섯 점이 모두 하나의 원뿔곡선 위에 놓였습니다."
          },
          {
            step: "Step 4",
            title: "점들을 차례대로 잇습니다",
            text: "여섯 점을 순서대로 연결하면 곡선에 내접하는 육각형이 완성됩니다."
          },
          {
            step: "Step 5",
            title: "첫 번째 마주보는 변을 연장합니다",
            text: "AB와 DE를 연장하면 곡선 바깥에서 첫 번째 교점이 생깁니다."
          },
          {
            step: "Step 6",
            title: "두 번째 마주보는 변도 연장합니다",
            text: "이번에는 BC와 EF를 연장해 두 번째 바깥쪽 교점을 만듭니다."
          },
          {
            step: "Step 7",
            title: "마지막 마주보는 변도 연장합니다",
            text: "CD와 FA를 연장하면 세 번째 교점이 생기고, 전체 구성이 완성됩니다."
          },
          {
            step: "Step 8",
            title: "세 교점을 함께 보세요",
            text: "세 교점은 흩어지지 않고 정확히 하나의 직선 위에 놓입니다. 이것이 파스칼의 직선입니다."
          }
        ]
      }
    };

    const cameraStates = [
      { scale: 0.92, x: 0, y: 0, visible: false },
      { scale: 1.14, x: -10, y: -102, visible: true },
      { scale: 1.14, x: -10, y: -102, visible: true },
      { scale: 1.08, x: -4, y: -88, visible: true },
      { scale: 1.02, x: -6, y: -74, visible: true },
      { scale: 1.28, x: -118, y: -92, visible: true },
      { scale: 1.22, x: -54, y: -112, visible: true },
      { scale: 1.26, x: 36, y: -132, visible: true },
      { scale: 1.08, x: 0, y: -82, visible: true },
      { scale: 0.9, x: 210, y: -26, visible: true }
    ];

    const svg = document.getElementById("diagram");
    const hero = document.getElementById("hero");
    const diagramShell = document.getElementById("diagram-shell");
    const captionBox = document.getElementById("caption-box");
    const captionStep = document.getElementById("caption-step");
    const captionTitle = document.getElementById("caption-title");
    const captionText = document.getElementById("caption-text");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const randomizeButton = document.getElementById("randomize-button");
    const startButton = document.getElementById("start-button");
    const heroLanguage = document.getElementById("hero-language");
    const langEn = document.getElementById("lang-en");
    const langKo = document.getElementById("lang-ko");
    const homeButton = document.getElementById("home-button");
    const controls = document.getElementById("controls");
    const sideLegend = document.getElementById("side-legend");
    const legendTitle = document.getElementById("legend-title");
    const legendCurve = document.getElementById("legend-curve");
    const legendHex = document.getElementById("legend-hex");
    const legendGuide = document.getElementById("legend-guide");
    const legendPascal = document.getElementById("legend-pascal");
    const legendItemCurve = document.getElementById("legend-item-curve");
    const legendItemHex = document.getElementById("legend-item-hex");
    const legendItemGuide = document.getElementById("legend-item-guide");
    const legendItemPascal = document.getElementById("legend-item-pascal");
    const outro = document.getElementById("outro");
    const outroEyebrow = document.getElementById("outro-eyebrow");
    const outroTitle = document.getElementById("outro-title");
    const outroSubtitle = document.getElementById("outro-subtitle");
    const sourcesList = document.getElementById("sources-list");
    const restartButton = document.getElementById("restart-button");
    const restartLabel = document.getElementById("restart-label");
    const outroHomeButton = document.getElementById("outro-home-button");
    const outroHomeLabel = document.getElementById("outro-home-label");
    const randomizeLabel = document.getElementById("randomize-label");
    const translatableNodes = [
      ...document.querySelectorAll("[data-i18n]"),
      captionStep,
      captionTitle,
      captionText,
      legendTitle,
      legendCurve,
      legendHex,
      legendGuide,
      legendPascal,
      outroEyebrow,
      outroTitle,
      outroSubtitle,
      restartLabel,
      outroHomeLabel,
      randomizeLabel,
      sourcesList
    ];

    const center = { x: 500, y: 500 };
    const ellipse = { rx: 292, ry: 208 };
    const defaultAngles = [236, 304, 348, 0, 20, 40];
    const randomRanges = [
      [216, 248],
      [286, 318],
      [334, 350],
      [354, 366],
      [372, 392],
      [396, 418]
    ];
    const labels = ["A", "B", "C", "D", "E", "F"];
    const guideColors = [
      "var(--guide-one)",
      "var(--guide-two)",
      "var(--guide-three)"
    ];
    const oppositePairs = [
      [0, 1, 3, 4],
      [1, 2, 4, 5],
      [2, 3, 5, 0]
    ];

    const state = {
      language: "en",
      step: 0,
      started: false,
      angles: [...defaultAngles],
      isRandomizing: false,
      snapHiddenLines: false,
      languageAnimationTimer: null
    };

    const nodes = {
      curve: null,
      polygon: null,
      guidePairs: [],
      pointDots: [],
      pointLabels: [],
      intersectionGlows: [],
      intersectionPoints: [],
      pascalLine: null
    };

    buildScene();
    translatableNodes.forEach((node) => node.classList.add("lang-copy"));
    applyLanguage();
    render();

    startButton.addEventListener("click", () => {
      state.started = true;
      state.step = 0;
      render();
    });

    heroLanguage.addEventListener("click", () => {
      setLanguage(state.language === "en" ? "ko" : "en");
    });

    langEn.addEventListener("click", () => setLanguage("en"));
    langKo.addEventListener("click", () => setLanguage("ko"));
    homeButton.addEventListener("click", goHome);
    restartButton.addEventListener("click", () => {
      state.started = true;
      state.step = 0;
      render();
    });
    outroHomeButton.addEventListener("click", goHome);

    prevButton.addEventListener("click", previousStep);
    nextButton.addEventListener("click", nextStep);
    randomizeButton.addEventListener("click", randomizePoints);

    window.addEventListener("keydown", (event) => {
      if (event.key === " " || event.key === "ArrowRight") {
        event.preventDefault();
        if (!state.started) {
          state.started = true;
          state.step = 0;
          render();
          return;
        }
        nextStep();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousStep();
      }
    });

    function setLanguage(language) {
      if (language === state.language) return;
      if (state.languageAnimationTimer) {
        clearTimeout(state.languageAnimationTimer);
        state.languageAnimationTimer = null;
      }

      document.querySelector(".app").classList.add("language-transitioning");

      state.languageAnimationTimer = window.setTimeout(() => {
        state.language = language;
        applyLanguage();
        render();

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.querySelector(".app").classList.remove("language-transitioning");
          });
        });

        state.languageAnimationTimer = null;
      }, 135);
    }

    function nextStep() {
      if (!state.started) return;
      state.step = Math.min(copy[state.language].steps.length, state.step + 1);
      render();
    }

    function previousStep() {
      if (!state.started) return;
      if (state.step === 0) {
        goHome();
        return;
      }
      state.step -= 1;
      render();
    }

    function goHome() {
      state.started = false;
      state.step = 0;
      render();
    }

    function applyLanguage() {
      document.documentElement.lang = state.language === "ko" ? "ko" : "en";
      document.querySelectorAll("[data-i18n]").forEach((node) => {
        node.textContent = copy[state.language][node.dataset.i18n];
      });
      outroEyebrow.textContent = copy[state.language].outroEyebrow;
      outroTitle.textContent = copy[state.language].outroTitle;
      outroSubtitle.textContent = copy[state.language].outroSubtitle;
      restartLabel.textContent = copy[state.language].restart;
      outroHomeLabel.textContent = copy[state.language].home;
      randomizeLabel.textContent = copy[state.language].randomize;
      legendTitle.textContent = copy[state.language].legendTitle;
      legendCurve.textContent = copy[state.language].legendCurve;
      legendHex.textContent = copy[state.language].legendHex;
      legendGuide.textContent = copy[state.language].legendGuide;
      legendPascal.textContent = copy[state.language].legendPascal;
      sourcesList.innerHTML = "";
      copy[state.language].sources.forEach((source) => {
        const item = document.createElement("li");
        item.innerHTML = `<a href="${source.url}" target="_blank" rel="noreferrer"><span class="source-dot"></span><span>${source.label}</span></a>`;
        sourcesList.appendChild(item);
      });
      langEn.classList.toggle("active", state.language === "en");
      langKo.classList.toggle("active", state.language === "ko");
    }

    function render() {
      const tutorialCount = copy[state.language].steps.length;
      const isOutro = state.started && state.step === tutorialCount;
      const inTutorial = state.started && !isOutro;

      hero.classList.toggle("hidden", state.started);
      outro.classList.toggle("visible", isOutro);
      controls.classList.toggle("hidden", !inTutorial);
      sideLegend.classList.toggle("hidden", !inTutorial);
      captionBox.classList.toggle("visible", inTutorial);
      captionBox.parentElement.classList.toggle("hidden", !inTutorial);
      diagramShell.classList.toggle("visible", state.started);
      homeButton.classList.toggle("hidden", !state.started);

      if (inTutorial) {
        const stepCopy = copy[state.language].steps[state.step];
        captionStep.textContent = stepCopy.step;
        captionTitle.textContent = stepCopy.title;
        captionText.textContent = stepCopy.text;
      }

      prevButton.disabled = !inTutorial;
      nextButton.disabled = !inTutorial || state.step === tutorialCount;
      randomizeButton.disabled = state.isRandomizing;
      randomizeButton.classList.toggle("hidden", !(inTutorial && state.step === 2));

      updateCamera();
      updateGeometry();
      updateLegend(inTutorial ? state.step : -1);
    }

    function randomizePoints() {
      if (!(state.started && state.step === 2) || state.isRandomizing) return;
      const nextAngles = randomRanges.map(([min, max]) => normalizeAngle(min + Math.random() * (max - min)));
      state.isRandomizing = true;
      state.snapHiddenLines = true;
      render();
      animateAngles(state.angles, nextAngles, 520);
    }

    function animateAngles(fromAngles, toAngles, duration) {
      const start = performance.now();

      function tick(now) {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);

        state.angles = fromAngles.map((angle, index) =>
          normalizeAngle(angle + shortestAngleDelta(angle, toAngles[index]) * eased)
        );

        updateScenePositions();
        updateGeometry();

        if (progress < 1) {
          requestAnimationFrame(tick);
          return;
        }

        state.angles = [...toAngles];
        state.isRandomizing = false;
        updateScenePositions();
        render();
      }

      requestAnimationFrame(tick);
    }

    function updateCamera() {
      const cameraIndex = state.started ? Math.min(state.step + 1, cameraStates.length - 1) : 0;
      const camera = cameraStates[cameraIndex];
      diagramShell.style.transform = `translate(${camera.x}px, ${camera.y}px) scale(${camera.scale})`;
      diagramShell.style.opacity = camera.visible ? "1" : "0";
    }

    function updateGeometry() {
      const revealLevel = getRevealLevel();
      const instantStroke = state.snapHiddenLines;
      state.snapHiddenLines = false;

      setStrokeProgress(nodes.curve, revealLevel >= 1 ? 1 : 0, instantStroke);

      nodes.pointDots.forEach((node, index) => {
        node.style.opacity = revealLevel >= pointStep(index) ? "1" : "0";
        node.style.transform = revealLevel >= pointStep(index) ? "scale(1)" : "scale(0.4)";
      });

      nodes.pointLabels.forEach((node, index) => {
        node.style.opacity = revealLevel >= pointStep(index) ? "1" : "0";
        node.style.transform = revealLevel >= pointStep(index) ? "translateY(0)" : "translateY(10px)";
      });

      setStrokeProgress(nodes.polygon, revealLevel >= 4 ? 1 : 0, instantStroke);

      nodes.guidePairs.forEach((pair, index) => {
        const visible = revealLevel >= 5 + index;
        pair.forEach((line) => setStrokeProgress(line, visible ? 1 : 0, instantStroke));
      });

      nodes.intersectionGlows.forEach((node, index) => {
        node.style.opacity = revealLevel >= 5 + index ? "1" : "0";
        node.style.transform = revealLevel >= 5 + index ? "scale(1)" : "scale(0.55)";
      });

      nodes.intersectionPoints.forEach((node, index) => {
        node.style.opacity = revealLevel >= 5 + index ? "1" : "0";
        node.style.transform = revealLevel >= 5 + index ? "scale(1)" : "scale(0.4)";
      });

      setStrokeProgress(nodes.pascalLine, revealLevel >= 8 ? 1 : 0, instantStroke);
    }

    function updateLegend(step) {
      legendItemCurve.classList.toggle("visible", step >= 0);
      legendItemHex.classList.toggle("visible", step >= 3);
      legendItemGuide.classList.toggle("visible", step >= 4);
      legendItemPascal.classList.toggle("visible", step >= 7);
    }

    function pointStep(index) {
      if (index < 2) return 1;
      if (index < 4) return 2;
      return 3;
    }

    function buildScene() {
      svg.innerHTML = "";
      const points = getPoints();
      const intersections = getIntersections(points);

      nodes.guidePairs = [];
      nodes.pointDots = [];
      nodes.pointLabels = [];
      nodes.intersectionGlows = [];
      nodes.intersectionPoints = [];

      add("defs", {}, [
        createFilter(),
        createGradient("glowGradient", [
          ["0%", "stop-color:#c96544;stop-opacity:0.17"],
          ["100%", "stop-color:#c96544;stop-opacity:0"]
        ])
      ]);

      nodes.curve = add("ellipse", {
        cx: center.x,
        cy: center.y,
        rx: ellipse.rx,
        ry: ellipse.ry,
        fill: "none",
        stroke: "var(--curve)",
        "stroke-width": 2.4,
        "stroke-linecap": "round"
      });

      nodes.polygon = add("polygon", {
        points: points.map(toPair).join(" "),
        fill: "none",
        stroke: "var(--hex)",
        "stroke-width": 3.5,
        "stroke-linejoin": "round"
      });

      points.forEach((point, index) => {
        const dot = add("circle", {
          cx: point.x,
          cy: point.y,
          r: 8.8,
          fill: "var(--point)",
          stroke: "#fffaf3",
          "stroke-width": 2
        });
        dot.style.opacity = "0";
        dot.style.transformOrigin = "center";
        dot.style.transition = "opacity 420ms ease, transform 520ms cubic-bezier(0.22, 1, 0.36, 1), cx 520ms cubic-bezier(0.22, 1, 0.36, 1), cy 520ms cubic-bezier(0.22, 1, 0.36, 1)";
        nodes.pointDots.push(dot);

        const offset = labelOffset(point);
        const label = add("text", {
          x: point.x + offset.x,
          y: point.y + offset.y,
          fill: "var(--ink)",
          "font-size": 31,
          "font-family": "Iowan Old Style, Georgia, serif",
          "font-style": "italic",
          "text-anchor": "middle"
        }, labels[index]);
        label.style.opacity = "0";
        label.style.transition = "opacity 420ms ease, transform 520ms cubic-bezier(0.22, 1, 0.36, 1), x 520ms cubic-bezier(0.22, 1, 0.36, 1), y 520ms cubic-bezier(0.22, 1, 0.36, 1)";
        nodes.pointLabels.push(label);
      });

      oppositePairs.forEach(([a1, a2, b1, b2], index) => {
        const first = extendSegmentToPoint(points[a1], points[a2], intersections[index], 64);
        const second = extendSegmentToPoint(points[b1], points[b2], intersections[index], 64);

        const line1 = add("line", {
          x1: first.a.x,
          y1: first.a.y,
          x2: first.b.x,
          y2: first.b.y,
          stroke: guideColors[index],
          "stroke-width": 2.15,
          "stroke-linecap": "round"
        });
        const line2 = add("line", {
          x1: second.a.x,
          y1: second.a.y,
          x2: second.b.x,
          y2: second.b.y,
          stroke: guideColors[index],
          "stroke-width": 2.15,
          "stroke-linecap": "round"
        });

        nodes.guidePairs.push([line1, line2]);

        const glow = add("circle", {
          cx: intersections[index].x,
          cy: intersections[index].y,
          r: 38,
          fill: "url(#glowGradient)"
        });
        glow.style.opacity = "0";
        glow.style.transformOrigin = "center";
        glow.style.transition = "opacity 420ms ease, transform 520ms cubic-bezier(0.22, 1, 0.36, 1), cx 520ms cubic-bezier(0.22, 1, 0.36, 1), cy 520ms cubic-bezier(0.22, 1, 0.36, 1)";
        nodes.intersectionGlows.push(glow);

        const intersectionPoint = add("circle", {
          cx: intersections[index].x,
          cy: intersections[index].y,
          r: 7.8,
          fill: "var(--pascal)",
          filter: "url(#softShadow)"
        });
        intersectionPoint.style.opacity = "0";
        intersectionPoint.style.transformOrigin = "center";
        intersectionPoint.style.transition = "opacity 420ms ease, transform 520ms cubic-bezier(0.22, 1, 0.36, 1), cx 520ms cubic-bezier(0.22, 1, 0.36, 1), cy 520ms cubic-bezier(0.22, 1, 0.36, 1)";
        nodes.intersectionPoints.push(intersectionPoint);
      });

      const pascal = extendSegment(intersections[0], intersections[2], 76);
      nodes.pascalLine = add("line", {
        x1: pascal.a.x,
        y1: pascal.a.y,
        x2: pascal.b.x,
        y2: pascal.b.y,
        stroke: "var(--pascal)",
        "stroke-width": 4.3,
        "stroke-linecap": "round"
      });

      [nodes.curve, nodes.polygon, nodes.pascalLine].forEach(primeLine);
      nodes.guidePairs.flat().forEach(primeLine);
    }

    function primeLine(node) {
      const length = node.getTotalLength();
      node.dataset.length = String(length);
      node.style.strokeDasharray = `${length}`;
      node.style.transition = "opacity 420ms ease, stroke-dashoffset 820ms cubic-bezier(0.22, 1, 0.36, 1), x1 520ms cubic-bezier(0.22, 1, 0.36, 1), y1 520ms cubic-bezier(0.22, 1, 0.36, 1), x2 520ms cubic-bezier(0.22, 1, 0.36, 1), y2 520ms cubic-bezier(0.22, 1, 0.36, 1), points 520ms cubic-bezier(0.22, 1, 0.36, 1)";
      setStrokeProgress(node, 0);
    }

    function setStrokeProgress(node, progress, instant = false) {
      const length = Number(node.dataset.length || 0);
      const previousTransition = node.style.transition;

      if (instant) {
        node.style.transition = "none";
      }

      node.style.strokeDashoffset = `${length * (1 - progress)}`;
      node.style.opacity = progress > 0 ? "1" : "0";

      if (instant) {
        void node.getBoundingClientRect();
        node.style.transition = previousTransition;
      }
    }

    function pointOnEllipse(angleDeg) {
      const angle = angleDeg * Math.PI / 180;
      return {
        x: center.x + ellipse.rx * Math.cos(angle),
        y: center.y + ellipse.ry * Math.sin(angle)
      };
    }

    function getPoints() {
      return state.angles.map((angle) => pointOnEllipse(angle));
    }

    function getIntersections(points) {
      return oppositePairs.map(([a1, a2, b1, b2]) =>
        lineIntersection(points[a1], points[a2], points[b1], points[b2])
      );
    }

    function getRevealLevel() {
      return state.started ? Math.min(state.step + 1, 8) : 0;
    }

    function normalizeAngle(angle) {
      return ((angle % 360) + 360) % 360;
    }

    function shortestAngleDelta(from, to) {
      return ((to - from + 540) % 360) - 180;
    }

    function labelOffset(point) {
      const dx = point.x - center.x;
      const dy = point.y - center.y;
      const mag = Math.hypot(dx, dy);
      return {
        x: (dx / mag) * 34,
        y: (dy / mag) * 34
      };
    }

    function lineIntersection(a, b, c, d) {
      const determinant = (a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x);
      const det1 = a.x * b.y - a.y * b.x;
      const det2 = c.x * d.y - c.y * d.x;
      return {
        x: (det1 * (c.x - d.x) - (a.x - b.x) * det2) / determinant,
        y: (det1 * (c.y - d.y) - (a.y - b.y) * det2) / determinant
      };
    }

    function extendSegment(a, b, amount) {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const length = Math.hypot(dx, dy);
      const ux = dx / length;
      const uy = dy / length;
      return {
        a: { x: a.x - ux * amount, y: a.y - uy * amount },
        b: { x: b.x + ux * amount, y: b.y + uy * amount }
      };
    }

    function extendSegmentToPoint(a, b, target, margin) {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const length = Math.hypot(dx, dy);
      const ux = dx / length;
      const uy = dy / length;
      const projection = ((target.x - a.x) * ux) + ((target.y - a.y) * uy);
      const start = Math.min(0, projection) - margin;
      const end = Math.max(length, projection) + margin;

      return {
        a: {
          x: a.x + ux * start,
          y: a.y + uy * start
        },
        b: {
          x: a.x + ux * end,
          y: a.y + uy * end
        }
      };
    }

    function updateScenePositions() {
      const points = getPoints();
      const intersections = getIntersections(points);

      nodes.polygon.setAttribute("points", points.map(toPair).join(" "));

      points.forEach((point, index) => {
        nodes.pointDots[index].setAttribute("cx", point.x);
        nodes.pointDots[index].setAttribute("cy", point.y);

        const offset = labelOffset(point);
        nodes.pointLabels[index].setAttribute("x", point.x + offset.x);
        nodes.pointLabels[index].setAttribute("y", point.y + offset.y);
      });

      oppositePairs.forEach(([a1, a2, b1, b2], index) => {
        const first = extendSegmentToPoint(points[a1], points[a2], intersections[index], 64);
        const second = extendSegmentToPoint(points[b1], points[b2], intersections[index], 64);
        const [line1, line2] = nodes.guidePairs[index];

        setLinePosition(line1, first);
        setLinePosition(line2, second);

        nodes.intersectionGlows[index].setAttribute("cx", intersections[index].x);
        nodes.intersectionGlows[index].setAttribute("cy", intersections[index].y);
        nodes.intersectionPoints[index].setAttribute("cx", intersections[index].x);
        nodes.intersectionPoints[index].setAttribute("cy", intersections[index].y);
      });

      setLinePosition(nodes.pascalLine, extendSegment(intersections[0], intersections[2], 76));

      [nodes.polygon, nodes.pascalLine, ...nodes.guidePairs.flat()].forEach((node) => {
        const length = node.getTotalLength();
        node.dataset.length = String(length);
        node.style.strokeDasharray = `${length}`;
      });

      const revealLevel = getRevealLevel();
      setStrokeProgress(nodes.polygon, revealLevel >= 4 ? 1 : 0, true);
      nodes.guidePairs.forEach((pair, index) => {
        const visible = revealLevel >= 5 + index;
        pair.forEach((line) => setStrokeProgress(line, visible ? 1 : 0, true));
      });
      setStrokeProgress(nodes.pascalLine, revealLevel >= 8 ? 1 : 0, true);
    }

    function setLinePosition(node, segment) {
      node.setAttribute("x1", segment.a.x);
      node.setAttribute("y1", segment.a.y);
      node.setAttribute("x2", segment.b.x);
      node.setAttribute("y2", segment.b.y);
    }

    function createFilter() {
      const filter = document.createElementNS(NS, "filter");
      filter.setAttribute("id", "softShadow");
      filter.setAttribute("x", "-30%");
      filter.setAttribute("y", "-30%");
      filter.setAttribute("width", "160%");
      filter.setAttribute("height", "160%");

      const blur = document.createElementNS(NS, "feGaussianBlur");
      blur.setAttribute("in", "SourceAlpha");
      blur.setAttribute("stdDeviation", "6");
      filter.appendChild(blur);

      const offset = document.createElementNS(NS, "feOffset");
      offset.setAttribute("dx", "0");
      offset.setAttribute("dy", "4");
      filter.appendChild(offset);

      const color = document.createElementNS(NS, "feColorMatrix");
      color.setAttribute("type", "matrix");
      color.setAttribute("values", "0 0 0 0 0.14 0 0 0 0 0.16 0 0 0 0 0.25 0 0 0 0.16 0");
      filter.appendChild(color);

      const merge = document.createElementNS(NS, "feMerge");
      merge.appendChild(document.createElementNS(NS, "feMergeNode"));
      const source = document.createElementNS(NS, "feMergeNode");
      source.setAttribute("in", "SourceGraphic");
      merge.appendChild(source);
      filter.appendChild(merge);

      return filter;
    }

    function createGradient(id, stops) {
      const gradient = document.createElementNS(NS, "radialGradient");
      gradient.setAttribute("id", id);
      stops.forEach(([offset, style]) => {
        const stop = document.createElementNS(NS, "stop");
        stop.setAttribute("offset", offset);
        style.split(";").forEach((entry) => {
          const [key, value] = entry.split(":");
          stop.setAttribute(key, value);
        });
        gradient.appendChild(stop);
      });
      return gradient;
    }

    function add(name, attrs, content = []) {
      const node = document.createElementNS(NS, name);
      Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
      if (Array.isArray(content)) {
        content.forEach((child) => node.appendChild(child));
      } else {
        node.textContent = content;
      }
      svg.appendChild(node);
      return node;
    }

    function toPair(point) {
      return `${point.x},${point.y}`;
    }