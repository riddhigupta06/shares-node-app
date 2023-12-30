const calculateDaily = (ph, pl, pc, pph, ppl, ppc) => {
  const jwd1 = parseFloat(
    parseFloat(pl) + (parseFloat(ph) - parseFloat(pl)) * 0.382,
  ).toFixed(2);

  const jgd1 = parseFloat(
    parseFloat(ph) - (parseFloat(ph) - parseFloat(pl)) * 0.382,
  ).toFixed(2);

  const jwd2 = parseFloat(
    parseFloat(ppl) + (parseFloat(pph) - parseFloat(ppl)) * 0.382,
  ).toFixed(2);

  const jgd2 = parseFloat(
    parseFloat(pph) - (parseFloat(pph) - parseFloat(ppl)) * 0.382,
  ).toFixed(2);

  let tst = [
    [null, null, null],
    [null, null, null],
  ];

  if (jgd1 > jwd2 && jwd1 > jwd2) {
    const values1 = [jgd1, jgd2];
    const values2 = [jwd1, jwd2];

    values1.sort(function (a, b) {
      return b - a;
    });

    values2.sort(function (a, b) {
      return b - a;
    });

    const val1 = values1[0];
    const val2 = values1[1];
    const val3 = values2[0];
    const val4 = values2[1];

    tst = [
      [val1, val2, null],
      [val3, val4, null],
    ];
  } else if (jgd1 < jwd2) {
    const values1 = [jwd1, jwd2, jgd1, jgd2];
    const values2 = [jwd1, jwd2];
    values1.sort(function (a, b) {
      return b - a;
    });

    values2.sort(function (a, b) {
      return b - a;
    });

    const val1 = values1[0];
    const val2 = values1[1];
    const val3 = values1[2];
    const val4 = values2[1];

    tst = [
      [val1, val2, val3],
      [val4, null, null],
    ];
  } else if (jgd1 > jwd2 && jwd1 < jwd2) {
    const values = [jwd1, jwd2, jgd1, jgd2];
    values.sort(function (a, b) {
      return b - a;
    });
    const val1 = values[0];
    const val2 = values[1];
    const val3 = values[3];

    tst = [
      [val1, val2, null],
      [val3, null, null],
    ];
  }

  const valrcnz1 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.118"),
  ).toFixed(2);

  const valrcnz2 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.236"),
  ).toFixed(2);

  const valrcnz3 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.382"),
  ).toFixed(2);

  const valrcmz1 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.618"),
  ).toFixed(2);
  const valrcmz2 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("1"),
  ).toFixed(2);

  const valrcwz1 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("1.272"),
  ).toFixed(2);
  const valrcwz2 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("1.618"),
  ).toFixed(2);
  const valrcwz3 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("2.618"),
  ).toFixed(2);
  const valrcwz4 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("4.238"),
  ).toFixed(2);

  const valfcnz1 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.118"),
  ).toFixed(2);
  const valfcnz2 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.236"),
  ).toFixed(2);
  const valfcnz3 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.382"),
  ).toFixed(2);

  const valfcmz1 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.618"),
  ).toFixed(2);
  const valfcmz2 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("1"),
  ).toFixed(2);

  const valfcwz1 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("1.272"),
  ).toFixed(2);
  const valfcwz2 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("1.618"),
  ).toFixed(2);
  const valfcwz3 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("2.618"),
  ).toFixed(2);
  const valfcwz4 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("4.238"),
  ).toFixed(2);

  const rctv = parseFloat(
    parseFloat(valrcnz1) -
      ((parseFloat(ph) - parseFloat(pl)) * parseFloat("0.073") +
        parseFloat(0.00073) * parseFloat(pc)) +
      parseFloat(1),
  ).toFixed(2);

  const rcnz1_us = parseFloat(
    parseFloat(valrcnz1) +
      (parseFloat(valrcnz2) - parseFloat(valrcnz1)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const rcnz1_ls = parseFloat(
    parseFloat(valrcnz1) -
      (parseFloat(valrcnz1) - parseFloat(valfcnz1)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);
  const rcnz2_us = parseFloat(
    parseFloat(valrcnz2) +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.1") +
      parseFloat("0.5"),
  ).toFixed(2);
  const rcnz2_ls = parseFloat(
    parseFloat(valrcnz2) -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.1") -
      parseFloat("0.5"),
  ).toFixed(2);
  const rcnz3_us = parseFloat(
    parseFloat(valrcnz3) +
      (parseFloat(valrcmz1) - parseFloat(valrcnz3)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const rcnz3_ls = parseFloat(
    parseFloat(valrcnz3) -
      (parseFloat(valrcnz3) - parseFloat(valrcnz2)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);

  const rcmz1_us = parseFloat(
    parseFloat(valrcmz1) +
      (parseFloat(valrcmz2) - parseFloat(valrcmz1)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const rcmz1_ls = parseFloat(
    parseFloat(valrcmz1) -
      (parseFloat(valrcmz1) - parseFloat(valrcnz3)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);
  const rcmz2_us = parseFloat(
    parseFloat(valrcmz2) +
      (parseFloat(valrcwz1) - parseFloat(valrcmz2)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const rcmz2_ls = parseFloat(
    parseFloat(valrcmz2) -
      (parseFloat(valrcmz2) - parseFloat(valrcmz1)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);

  const rcwz1_us = parseFloat(
    parseFloat(valrcwz1) +
      (parseFloat(valrcwz2) - parseFloat(valrcwz1)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const rcwz1_ls = parseFloat(
    parseFloat(valrcwz1) -
      (parseFloat(valrcwz1) - parseFloat(valrcmz2)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);
  const rcwz2_us = parseFloat(
    parseFloat(valrcwz2) +
      (parseFloat(valrcwz3) - parseFloat(valrcwz2)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const rcwz2_ls = parseFloat(
    parseFloat(valrcwz2) -
      (parseFloat(valrcwz2) - parseFloat(valrcwz1)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);
  const rcwz3_us = parseFloat(
    parseFloat(valrcwz3) +
      (parseFloat(valrcwz4) - parseFloat(valrcwz3)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const rcwz3_ls = parseFloat(
    parseFloat(valrcwz3) -
      (parseFloat(valrcwz3) - parseFloat(valrcwz2)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);

  const fctv = parseFloat(
    parseFloat(valfcnz1) +
      ((parseFloat(ph) - parseFloat(pl)) * parseFloat("0.073") +
        parseFloat(0.00073) * parseFloat(pc)) -
      parseFloat(1),
  ).toFixed(2);

  const fcnz1_us = parseFloat(
    parseFloat(valfcnz1) +
      (parseFloat(valrcnz1) - parseFloat(valfcnz1)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const fcnz1_ls = parseFloat(
    parseFloat(valfcnz1) -
      (parseFloat(valfcnz1) - parseFloat(valfcnz2)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);
  const fcnz2_us = parseFloat(
    parseFloat(valfcnz2) +
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.1") +
      parseFloat("0.5"),
  ).toFixed(2);
  const fcnz2_ls = parseFloat(
    parseFloat(valfcnz2) -
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.1") -
      parseFloat("0.5"),
  ).toFixed(2);
  const fcnz3_us = parseFloat(
    parseFloat(valfcnz3) +
      (parseFloat(valfcnz2) - parseFloat(valfcnz3)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const fcnz3_ls = parseFloat(
    parseFloat(valfcnz3) -
      (parseFloat(valfcnz3) - parseFloat(valfcmz1)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);

  const fcmz1_us = parseFloat(
    parseFloat(valfcmz1) +
      (parseFloat(valfcnz3) - parseFloat(valfcmz1)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const fcmz1_ls = parseFloat(
    parseFloat(valfcmz1) -
      (parseFloat(valfcmz1) - parseFloat(valfcmz2)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);
  const fcmz2_us = parseFloat(
    parseFloat(valfcmz2) +
      (parseFloat(valfcmz1) - parseFloat(valfcmz2)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const fcmz2_ls = parseFloat(
    parseFloat(valfcmz2) -
      (parseFloat(valfcmz2) - parseFloat(valfcwz1)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);

  const fcwz1_us = parseFloat(
    parseFloat(valfcwz1) +
      (parseFloat(valfcmz2) - parseFloat(valfcwz1)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const fcwz1_ls = parseFloat(
    parseFloat(valfcwz1) -
      (parseFloat(valfcwz1) - parseFloat(valfcwz2)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);
  const fcwz2_us = parseFloat(
    parseFloat(valfcwz2) +
      (parseFloat(valfcwz1) - parseFloat(valfcwz2)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const fcwz2_ls = parseFloat(
    parseFloat(valfcwz2) -
      (parseFloat(valfcwz2) - parseFloat(valfcwz3)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);
  const fcwz3_us = parseFloat(
    parseFloat(valfcwz3) +
      (parseFloat(valfcwz2) - parseFloat(valfcwz3)) * parseFloat("0.382") +
      parseFloat("0.5"),
  ).toFixed(2);
  const fcwz3_ls = parseFloat(
    parseFloat(valfcwz3) -
      (parseFloat(valfcwz3) - parseFloat(valfcwz4)) * parseFloat("0.382") -
      parseFloat("0.5"),
  ).toFixed(2);

  return {
    ph: ph,
    pl: pl,
    pc: pc,
    pph: pph,
    ppl: ppl,
    ppc: ppc,
    tst: tst,
    rctv: rctv,
    fctv: fctv,
    rcnz1: valrcnz1,
    rcnz2: valrcnz2,
    rcnz3: valrcnz3,
    rcmz1: valrcmz1,
    rcmz2: valrcmz2,
    rcwz1: valrcwz1,
    rcwz2: valrcwz2,
    rcwz3: valrcwz3,
    rcnz1_us: rcnz1_us,
    rcnz1_ls: rcnz1_ls,
    rcnz2_us: rcnz2_us,
    rcnz2_ls: rcnz2_ls,
    rcnz3_us: rcnz3_us,
    rcnz3_ls: rcnz3_ls,
    rcmz1_us: rcmz1_us,
    rcmz1_ls: rcmz1_ls,
    rcmz2_us: rcmz2_us,
    rcmz2_ls: rcmz2_ls,
    rcwz1_us: rcwz1_us,
    rcwz1_ls: rcwz1_ls,
    rcwz2_us: rcwz2_us,
    rcwz2_ls: rcwz2_ls,
    rcwz3_us: rcwz3_us,
    rcwz3_ls: rcwz3_ls,
    fcnz1: valfcnz1,
    fcnz2: valfcnz2,
    fcnz3: valfcnz3,
    fcmz1: valfcmz1,
    fcmz2: valfcmz2,
    fcwz1: valfcwz1,
    fcwz2: valfcwz2,
    fcwz3: valfcwz3,
    fcnz1_us: fcnz1_us,
    fcnz1_ls: fcnz1_ls,
    fcnz2_us: fcnz2_us,
    fcnz2_ls: fcnz2_ls,
    fcnz3_us: fcnz3_us,
    fcnz3_ls: fcnz3_ls,
    fcmz1_us: fcmz1_us,
    fcmz1_ls: fcmz1_ls,
    fcmz2_us: fcmz2_us,
    fcmz2_ls: fcmz2_ls,
    fcwz1_us: fcwz1_us,
    fcwz1_ls: fcwz1_ls,
    fcwz2_us: fcwz2_us,
    fcwz2_ls: fcwz2_ls,
    fcwz3_us: fcwz3_us,
    fcwz3_ls: fcwz3_ls,
  };
};

const calculateWeekly = (ph, pl, pc, pph, ppl, ppc) => {
  const jwd1 = parseFloat(
    parseFloat(pl) + (parseFloat(ph) - parseFloat(pl)) * 0.382,
  ).toFixed(2);

  const jgd1 = parseFloat(
    parseFloat(ph) - (parseFloat(ph) - parseFloat(pl)) * 0.382,
  ).toFixed(2);

  const jwd2 = parseFloat(
    parseFloat(ppl) + (parseFloat(pph) - parseFloat(ppl)) * 0.382,
  ).toFixed(2);

  const jgd2 = parseFloat(
    parseFloat(pph) - (parseFloat(pph) - parseFloat(ppl)) * 0.382,
  ).toFixed(2);

  let tst = [
    [null, null, null],
    [null, null, null],
  ];

  if (jgd1 > jwd2 && jwd1 > jwd2) {
    const values1 = [jgd1, jgd2];
    const values2 = [jwd1, jwd2];

    values1.sort(function (a, b) {
      return b - a;
    });

    values2.sort(function (a, b) {
      return b - a;
    });

    const val1 = values1[0];
    const val2 = values1[1];
    const val3 = values2[0];
    const val4 = values2[1];

    tst = [
      [val1, val2, null],
      [val3, val4, null],
    ];
  } else if (jgd1 < jwd2) {
    const values1 = [jwd1, jwd2, jgd1, jgd2];
    const values2 = [jwd1, jwd2];
    values1.sort(function (a, b) {
      return b - a;
    });

    values2.sort(function (a, b) {
      return b - a;
    });

    const val1 = values1[0];
    const val2 = values1[1];
    const val3 = values1[2];
    const val4 = values2[1];

    tst = [
      [val1, val2, val3],
      [val4, null, null],
    ];
  } else if (jgd1 > jwd2 && jwd1 < jwd2) {
    const values = [jwd1, jwd2, jgd1, jgd2];
    values.sort(function (a, b) {
      return b - a;
    });
    const val1 = values[0];
    const val2 = values[1];
    const val3 = values[3];

    tst = [
      [val1, val2, null],
      [val3, null, null],
    ];
  }

  const valwrcnz1 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.146"),
  ).toFixed(2);
  const valwrcnz2 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.236"),
  ).toFixed(2);
  const valwrcnz3 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.382"),
  ).toFixed(2);

  const valwrcmz1 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.618"),
  ).toFixed(2);
  const valwrcmz2 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("1"),
  ).toFixed(2);

  const valwrcwz1 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("1.272"),
  ).toFixed(2);
  const valwrcwz2 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("1.618"),
  ).toFixed(2);
  const valwrcwz3 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("2.618"),
  ).toFixed(2);
  const valwrcwz4 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("4.236"),
  ).toFixed(2);

  const valwfcnz1 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.146"),
  ).toFixed(2);
  const valwfcnz2 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.236"),
  ).toFixed(2);
  const valwfcnz3 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.382"),
  ).toFixed(2);

  const valwfcmz1 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.618"),
  ).toFixed(2);
  const valwfcmz2 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("1"),
  ).toFixed(2);

  const valwfcwz1 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("1.272"),
  ).toFixed(2);
  const valwfcwz2 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("1.618"),
  ).toFixed(2);
  const valwfcwz3 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("2.618"),
  ).toFixed(2);
  const valwfcwz4 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("4.236"),
  ).toFixed(2);

  const wrctv = parseFloat(
    parseFloat(valwrcnz1) -
      ((parseFloat(ph) - parseFloat(pl)) * parseFloat("0.073") +
        parseFloat(0.00073) * parseFloat(pc)) +
      parseFloat(1),
  ).toFixed(2);

  const wrcnz1_us = parseFloat(
    parseFloat(valwrcnz1) +
      (parseFloat(valwrcnz2) - parseFloat(valwrcnz1)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wrcnz1_ls = parseFloat(
    parseFloat(valwrcnz1) -
      (parseFloat(valwrcnz1) - parseFloat(valwfcnz1)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const wrcnz2_us = parseFloat(
    parseFloat(valwrcnz2) +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.1") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wrcnz2_ls = parseFloat(
    parseFloat(valwrcnz2) -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.1") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const wrcnz3_us = parseFloat(
    parseFloat(valwrcnz3) +
      (parseFloat(valwrcmz1) - parseFloat(valwrcnz3)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wrcnz3_ls = parseFloat(
    parseFloat(valwrcnz3) -
      (parseFloat(valwrcnz3) - parseFloat(valwrcnz2)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const wrcmz1_us = parseFloat(
    parseFloat(valwrcmz1) +
      (parseFloat(valwrcmz2) - parseFloat(valwrcmz1)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wrcmz1_ls = parseFloat(
    parseFloat(valwrcmz1) -
      (parseFloat(valwrcmz1) - parseFloat(valwrcnz3)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const wrcmz2_us = parseFloat(
    parseFloat(valwrcmz2) +
      (parseFloat(valwrcwz1) - parseFloat(valwrcmz2)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wrcmz2_ls = parseFloat(
    parseFloat(valwrcmz2) -
      (parseFloat(valwrcmz2) - parseFloat(valwrcmz1)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const wrcwz1_us = parseFloat(
    parseFloat(valwrcwz1) +
      (parseFloat(valwrcwz2) - parseFloat(valwrcwz1)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.05"),
  ).toFixed(2);
  const wrcwz1_ls = parseFloat(
    parseFloat(valwrcwz1) -
      (parseFloat(valwrcwz1) - parseFloat(valwrcmz2)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const wrcwz2_us = parseFloat(
    parseFloat(valwrcwz2) +
      (parseFloat(valwrcwz3) - parseFloat(valwrcwz2)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wrcwz2_ls = parseFloat(
    parseFloat(valwrcwz2) -
      (parseFloat(valwrcwz2) - parseFloat(valwrcwz1)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.05"),
  ).toFixed(2);
  const wrcwz3_us = parseFloat(
    parseFloat(valwrcwz3) +
      (parseFloat(valwrcwz4) - parseFloat(valwrcwz3)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wrcwz3_ls = parseFloat(
    parseFloat(valwrcwz3) -
      (parseFloat(valwrcwz3) - parseFloat(valwrcwz2)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);

  const wfctv = parseFloat(
    parseFloat(valwfcnz1) +
      ((parseFloat(ph) - parseFloat(pl)) * parseFloat("0.073") +
        parseFloat(0.00073) * parseFloat(pc)) -
      parseFloat(1),
  ).toFixed(2);
  const wfcnz1_us = parseFloat(
    parseFloat(valwfcnz1) +
      (parseFloat(valwrcnz1) - parseFloat(valwfcnz1)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wfcnz1_ls = parseFloat(
    parseFloat(valwfcnz1) -
      (parseFloat(valwfcnz1) - parseFloat(valwfcnz2)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const wfcnz2_us = parseFloat(
    parseFloat(valwfcnz2) +
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.1") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wfcnz2_ls = parseFloat(
    parseFloat(valwfcnz2) -
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.1") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const wfcnz3_us = parseFloat(
    parseFloat(valwfcnz3) +
      (parseFloat(valwfcnz2) - parseFloat(valwfcnz3)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wfcnz3_ls = parseFloat(
    parseFloat(valwfcnz3) -
      (parseFloat(valwfcnz3) - parseFloat(valwfcmz1)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.05"),
  ).toFixed(2);
  const wfcmz1_us = parseFloat(
    parseFloat(valwfcmz1) +
      (parseFloat(valwfcnz3) - parseFloat(valwfcmz1)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wfcmz1_ls = parseFloat(
    parseFloat(valwfcmz1) -
      (parseFloat(valwfcmz1) - parseFloat(valwfcmz2)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const wfcmz2_us = parseFloat(
    parseFloat(valwfcmz2) +
      (parseFloat(valwfcmz1) - parseFloat(valwfcmz2)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wfcmz2_ls = parseFloat(
    parseFloat(valwfcmz2) -
      (parseFloat(valwfcmz2) - parseFloat(valwfcwz1)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const wfcwz1_us = parseFloat(
    parseFloat(valwfcwz1) +
      (parseFloat(valwfcmz2) - parseFloat(valwfcwz1)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wfcwz1_ls = parseFloat(
    parseFloat(valwfcwz1) -
      (parseFloat(valwfcwz1) - parseFloat(valwfcwz2)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const wfcwz2_us = parseFloat(
    parseFloat(valwfcwz2) +
      (parseFloat(valwfcwz1) - parseFloat(valwfcwz2)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const wfcwz2_ls = parseFloat(
    parseFloat(valwfcwz2) -
      (parseFloat(valwfcwz2) - parseFloat(valwfcwz3)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const wfcwz3_us = parseFloat(
    parseFloat(valwfcwz3) +
      (parseFloat(valwfcwz2) - parseFloat(valwfcwz3)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.0"),
  ).toFixed(2);
  const wfcwz3_ls = parseFloat(
    parseFloat(valwfcwz3) -
      (parseFloat(valwfcwz3) - parseFloat(valwfcwz4)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);

  return {
    ph: ph,
    pl: pl,
    pc: pc,
    pph: pph,
    ppl: ppl,
    ppc: ppc,
    tst: tst,
    rctv: wrctv,
    fctv: wfctv,
    rcnz1: valwrcnz1,
    rcnz2: valwrcnz2,
    rcnz3: valwrcnz3,
    rcmz1: valwrcmz1,
    rcmz2: valwrcmz2,
    rcwz1: valwrcwz1,
    rcwz2: valwrcwz2,
    rcwz3: valwrcwz3,
    rcnz1_us: wrcnz1_us,
    rcnz1_ls: wrcnz1_ls,
    rcnz2_us: wrcnz2_us,
    rcnz2_ls: wrcnz2_ls,
    rcnz3_us: wrcnz3_us,
    rcnz3_ls: wrcnz3_ls,
    rcmz1_us: wrcmz1_us,
    rcmz1_ls: wrcmz1_ls,
    rcmz2_us: wrcmz2_us,
    rcmz2_ls: wrcmz2_ls,
    rcwz1_us: wrcwz1_us,
    rcwz1_ls: wrcwz1_ls,
    rcwz2_us: wrcwz2_us,
    rcwz2_ls: wrcwz2_ls,
    rcwz3_us: wrcwz3_us,
    rcwz3_ls: wrcwz3_ls,
    fcnz1: valwfcnz1,
    fcnz2: valwfcnz2,
    fcnz3: valwfcnz3,
    fcmz1: valwfcmz1,
    fcmz2: valwfcmz2,
    fcwz1: valwfcwz1,
    fcwz2: valwfcwz2,
    fcwz3: valwfcwz3,
    fcnz1_us: wfcnz1_us,
    fcnz1_ls: wfcnz1_ls,
    fcnz2_us: wfcnz2_us,
    fcnz2_ls: wfcnz2_ls,
    fcnz3_us: wfcnz3_us,
    fcnz3_ls: wfcnz3_ls,
    fcmz1_us: wfcmz1_us,
    fcmz1_ls: wfcmz1_ls,
    fcmz2_us: wfcmz2_us,
    fcmz2_ls: wfcmz2_ls,
    fcwz1_us: wfcwz1_us,
    fcwz1_ls: wfcwz1_ls,
    fcwz2_us: wfcwz2_us,
    fcwz2_ls: wfcwz2_ls,
    fcwz3_us: wfcwz3_us,
    fcwz3_ls: wfcwz3_ls,
  };
};

const calculateMonthly = (ph, pl, pc, pph, ppl, ppc) => {
  const jwd1 = parseFloat(
    parseFloat(pl) + (parseFloat(ph) - parseFloat(pl)) * 0.382,
  ).toFixed(2);

  const jgd1 = parseFloat(
    parseFloat(ph) - (parseFloat(ph) - parseFloat(pl)) * 0.382,
  ).toFixed(2);

  const jwd2 = parseFloat(
    parseFloat(ppl) + (parseFloat(pph) - parseFloat(ppl)) * 0.382,
  ).toFixed(2);

  const jgd2 = parseFloat(
    parseFloat(pph) - (parseFloat(pph) - parseFloat(ppl)) * 0.382,
  ).toFixed(2);

  let tst = [
    [null, null, null],
    [null, null, null],
  ];

  if (jgd1 > jwd2 && jwd1 > jwd2) {
    const values1 = [jgd1, jgd2];
    const values2 = [jwd1, jwd2];

    values1.sort(function (a, b) {
      return b - a;
    });

    values2.sort(function (a, b) {
      return b - a;
    });

    const val1 = values1[0];
    const val2 = values1[1];
    const val3 = values2[0];
    const val4 = values2[1];

    tst = [
      [val1, val2, null],
      [val3, val4, null],
    ];
  } else if (jgd1 < jwd2) {
    const values1 = [jwd1, jwd2, jgd1, jgd2];
    const values2 = [jwd1, jwd2];
    values1.sort(function (a, b) {
      return b - a;
    });

    values2.sort(function (a, b) {
      return b - a;
    });

    const val1 = values1[0];
    const val2 = values1[1];
    const val3 = values1[2];
    const val4 = values2[1];

    tst = [
      [val1, val2, val3],
      [val4, null, null],
    ];
  } else if (jgd1 > jwd2 && jwd1 < jwd2) {
    const values = [jwd1, jwd2, jgd1, jgd2];
    values.sort(function (a, b) {
      return b - a;
    });
    const val1 = values[0];
    const val2 = values[1];
    const val3 = values[3];

    tst = [
      [val1, val2, null],
      [val3, null, null],
    ];
  }

  const valmrcnz1 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.146"),
  ).toFixed(2);
  const valmrcnz2 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.236"),
  ).toFixed(2);
  const valmrcnz3 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.382"),
  ).toFixed(2);

  const valmrcmz1 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.618"),
  ).toFixed(2);
  const valmrcmz2 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("1"),
  ).toFixed(2);

  const valmrcwz1 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("1.272"),
  ).toFixed(2);
  const valmrcwz2 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("1.618"),
  ).toFixed(2);
  const valmrcwz3 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("2.618"),
  ).toFixed(2);
  const valmrcwz4 = parseFloat(
    parseFloat(pc) + (parseFloat(ph) - parseFloat(pl)) * parseFloat("4.236"),
  ).toFixed(2);

  const valmfcnz1 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.146"),
  ).toFixed(2);
  const valmfcnz2 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.236"),
  ).toFixed(2);
  const valmfcnz3 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.382"),
  ).toFixed(2);

  const valmfcmz1 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("0.618"),
  ).toFixed(2);
  const valmfcmz2 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("1"),
  ).toFixed(2);

  const valmfcwz1 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("1.272"),
  ).toFixed(2);
  const valmfcwz2 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("1.618"),
  ).toFixed(2);
  const valmfcwz3 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("2.618"),
  ).toFixed(2);
  const valmfcwz4 = parseFloat(
    parseFloat(pc) - (parseFloat(ph) - parseFloat(pl)) * parseFloat("4.236"),
  ).toFixed(2);

  const mrctv = parseFloat(
    parseFloat(valmrcnz1) -
      ((parseFloat(ph) - parseFloat(pl)) * parseFloat("0.073") +
        parseFloat(0.00073) * parseFloat(pc)) +
      parseFloat(1),
  ).toFixed(2);

  const mrcnz1_us = parseFloat(
    parseFloat(valmrcnz1) +
      (parseFloat(valmrcnz2) - parseFloat(valmrcnz1)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcnz1_ls = parseFloat(
    parseFloat(valmrcnz1) -
      (parseFloat(valmrcnz1) - parseFloat(valmfcnz1)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcnz2_us = parseFloat(
    parseFloat(valmrcnz2) +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.1") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcnz2_ls = parseFloat(
    parseFloat(valmrcnz2) -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.1") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcnz3_us = parseFloat(
    parseFloat(valmrcnz3) +
      (parseFloat(valmrcmz1) - parseFloat(valmrcnz3)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcnz3_ls = parseFloat(
    parseFloat(valmrcnz3) -
      (parseFloat(valmrcnz3) - parseFloat(valmrcnz2)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcmz1_us = parseFloat(
    parseFloat(valmrcmz1) +
      (parseFloat(valmrcmz2) - parseFloat(valmrcmz1)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcmz1_ls = parseFloat(
    parseFloat(valmrcmz1) -
      (parseFloat(valmrcmz1) - parseFloat(valmrcnz3)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcmz2_us = parseFloat(
    parseFloat(valmrcmz2) +
      (parseFloat(valmrcwz1) - parseFloat(valmrcmz2)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcmz2_ls = parseFloat(
    parseFloat(valmrcmz2) -
      (parseFloat(valmrcmz2) - parseFloat(valmrcmz1)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcwz1_us = parseFloat(
    parseFloat(valmrcwz1) +
      (parseFloat(valmrcwz2) - parseFloat(valmrcwz1)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcwz1_ls = parseFloat(
    parseFloat(valmrcwz1) -
      (parseFloat(valmrcwz1) - parseFloat(valmrcmz2)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcwz2_us = parseFloat(
    parseFloat(valmrcwz2) +
      (parseFloat(valmrcwz3) - parseFloat(valmrcwz2)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcwz2_ls = parseFloat(
    parseFloat(valmrcwz2) -
      (parseFloat(valmrcwz2) - parseFloat(valmrcwz1)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcwz3_us = parseFloat(
    parseFloat(valmrcwz3) +
      (parseFloat(valmrcwz4) - parseFloat(valmrcwz3)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mrcwz3_ls = parseFloat(
    parseFloat(valmrcwz3) -
      (parseFloat(valmrcwz3) - parseFloat(valmrcwz2)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);

  const mfctv = parseFloat(
    parseFloat(valmfcnz1) +
      ((parseFloat(ph) - parseFloat(pl)) * parseFloat("0.073") +
        parseFloat(0.00073) * parseFloat(pc)) -
      parseFloat(1),
  ).toFixed(2);
  const mfcnz1_us = parseFloat(
    parseFloat(valmfcnz1) +
      (parseFloat(valmrcnz1) - parseFloat(valmfcnz1)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcnz1_ls = parseFloat(
    parseFloat(valmfcnz1) -
      (parseFloat(valmfcnz1) - parseFloat(valmfcnz2)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcnz2_us = parseFloat(
    parseFloat(valmfcnz2) +
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.1") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcnz2_ls = parseFloat(
    parseFloat(valmfcnz2) -
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.1") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcnz3_us = parseFloat(
    parseFloat(valmfcnz3) +
      (parseFloat(valmfcnz2) - parseFloat(valmfcnz3)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcnz3_ls = parseFloat(
    parseFloat(valmfcnz3) -
      (parseFloat(valmfcnz3) - parseFloat(valmfcmz1)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcmz1_us = parseFloat(
    parseFloat(valmfcmz1) +
      (parseFloat(valmfcnz3) - parseFloat(valmfcmz1)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcmz1_ls = parseFloat(
    parseFloat(valmfcmz1) -
      (parseFloat(valmfcmz1) - parseFloat(valmfcmz2)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcmz2_us = parseFloat(
    parseFloat(valmfcmz2) +
      (parseFloat(valmfcmz1) - parseFloat(valmfcmz2)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcmz2_ls = parseFloat(
    parseFloat(valmfcmz2) -
      (parseFloat(valmfcmz2) - parseFloat(valmfcwz1)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcwz1_us = parseFloat(
    parseFloat(valmfcwz1) +
      (parseFloat(valmfcmz2) - parseFloat(valmfcwz1)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcwz1_ls = parseFloat(
    parseFloat(valmfcwz1) -
      (parseFloat(valmfcwz1) - parseFloat(valmfcwz2)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcwz2_us = parseFloat(
    parseFloat(valmfcwz2) +
      (parseFloat(valmfcwz1) - parseFloat(valmfcwz2)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcwz2_ls = parseFloat(
    parseFloat(valmfcwz2) -
      (parseFloat(valmfcwz2) - parseFloat(valmfcwz3)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcwz3_us = parseFloat(
    parseFloat(valmfcwz3) +
      (parseFloat(valmfcwz2) - parseFloat(valmfcwz3)) * parseFloat("0.382") +
      parseFloat(pc) * parseFloat("0.00073") +
      parseFloat("0.5"),
  ).toFixed(2);
  const mfcwz3_ls = parseFloat(
    parseFloat(valmfcwz3) -
      (parseFloat(valmfcwz3) - parseFloat(valmfcwz4)) * parseFloat("0.382") -
      parseFloat(pc) * parseFloat("0.00073") -
      parseFloat("0.5"),
  ).toFixed(2);

  return {
    ph: ph,
    pl: pl,
    pc: pc,
    pph: pph,
    ppl: ppl,
    ppc: ppc,
    tst: tst,
    rctv: mrctv,
    fctv: mfctv,
    rcnz1: valmrcnz1,
    rcnz2: valmrcnz2,
    rcnz3: valmrcnz3,
    rcmz1: valmrcmz1,
    rcmz2: valmrcmz2,
    rcwz1: valmrcwz1,
    rcwz2: valmrcwz2,
    rcwz3: valmrcwz3,
    rcnz1_us: mrcnz1_us,
    rcnz1_ls: mrcnz1_ls,
    rcnz2_us: mrcnz2_us,
    rcnz2_ls: mrcnz2_ls,
    rcnz3_us: mrcnz3_us,
    rcnz3_ls: mrcnz3_ls,
    rcmz1_us: mrcmz1_us,
    rcmz1_ls: mrcmz1_ls,
    rcmz2_us: mrcmz2_us,
    rcmz2_ls: mrcmz2_ls,
    rcwz1_us: mrcwz1_us,
    rcwz1_ls: mrcwz1_ls,
    rcwz2_us: mrcwz2_us,
    rcwz2_ls: mrcwz2_ls,
    rcwz3_us: mrcwz3_us,
    rcwz3_ls: mrcwz3_ls,
    fcnz1: valmfcnz1,
    fcnz2: valmfcnz2,
    fcnz3: valmfcnz3,
    fcmz1: valmfcmz1,
    fcmz2: valmfcmz2,
    fcwz1: valmfcwz1,
    fcwz2: valmfcwz2,
    fcwz3: valmfcwz3,
    fcnz1_us: mfcnz1_us,
    fcnz1_ls: mfcnz1_ls,
    fcnz2_us: mfcnz2_us,
    fcnz2_ls: mfcnz2_ls,
    fcnz3_us: mfcnz3_us,
    fcnz3_ls: mfcnz3_ls,
    fcmz1_us: mfcmz1_us,
    fcmz1_ls: mfcmz1_ls,
    fcmz2_us: mfcmz2_us,
    fcmz2_ls: mfcmz2_ls,
    fcwz1_us: mfcwz1_us,
    fcwz1_ls: mfcwz1_ls,
    fcwz2_us: mfcwz2_us,
    fcwz2_ls: mfcwz2_ls,
    fcwz3_us: mfcwz3_us,
    fcwz3_ls: mfcwz3_ls,
  };
};

module.exports = { calculateDaily, calculateWeekly, calculateMonthly };
