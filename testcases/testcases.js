// TODO: Refactor into a JSON file, if needed.
var EQUATIONS = [
    ['1', 'Fraction 1', 'x=\\frac{11+y}{1+2z^2}'],
    ['2', 'Fraction 2', 'x=\\frac{1+y}{1+2z^2}'],
    ['3', 'Fraction 3', 'x=\\frac{1+y}{1+2x^2}'],
    ['4', 'Big fraction', '2 = \\left( \\frac{\\left(3-x\\right) \\times 2}{3-x} \\right)'],
    ['5', 'Square', 'x={-b\\pm\\sqrt{b^2-4ac} \\over 2a}'],
    ['6', 'Integration', '\\int_0^\\infty e^{-x^2} dx=\\frac{\\sqrt{\\pi}}{2}'],
    ['7', 'Superscript and subscript', 'x = 10^{20}_5'],
    ['8', 'Sum', '\\sum_{n=1}^\\infty {1\\over n^2} = {\\pi^2\\over 6}'],
    ['9', 'Lightspeed', '\\lspeed = 299792458{m \\over \\scnd}'],
    ['10', 'Initial charge', 'q = 10'],
    ['11', 'Energy', 'E = x'],
    ['12', 'Meter', 'x = 10m + 20\\cm'],
    ['13', 'Misc symbols A', 'a = \\epsilonzero + \\varepsilon'],
    ['14', 'Misc symbols B', 'b = \\phi + \\lambda + \\theta + \\Phi'],
    ['15', 'Misc symbols C', 'c = \\eta + €'],
    ['16', 'Plancks and Boltzmanns', '\\Plancks \\neq \\Boltzmanns'],
    ['17', 'Air Mass', '\\AM = x'],
    ['18', 'Radiation', '\\rad = x'],
    ['19', 'Amplifiers', '1\\Mega, 2\\nano, 3\\Giga, 4\\Tera, 3\\kilo, 20\\micro'],
    ['20', 'Electricity', '\\Watt = \\Amp \\times \\volt'],
    ['21', 'Sine and Cosine', '\\tan \\theta = {\\cos \\theta \\over \\sin \\theta}'],
    ['22', 'Temrature', '\\Tmpr = 10\\Klvn'],
    ['23', 'Current', '\\current = 10\\Amp'],
    ['24', 'ER #1', '\\er'],
    ['24.b', 'ER #2', '\\er = x'],
    ['25', 'The J stuff', '\\J_\\zero, \\J_\\ph, \\J_\\diffe, \\J_\\sc'],
    ['26', 'Voltage of Open Circuit', '\\V_\\oc'],
    ['27', 'Concentation Stuff', '\\NA, \\ND, \\nii'],
    ['28', 'Deplation Area', '\\Wd = x'],
    ['29', 'Farad', '\\F = {{\\scnd^4 \\cdot \\Amp^2} \\over {\\kilo\\grm \\cdot m^2}}'],
    ['30', 'Diffusion Length', '\\Ld = 10m'],
    ['31', 'Electrons Diffusion', '\\D_\\ek'],
    ['32', 'Electrons Motion Constant', '\\mue'],
    ['33', 'Hole', '20\\hole'],
    ['34', 'Electrons', '2 \\elctrn'],
    ['35', 'Time', '1\\year = 365.25\\day, 1\\day = 24\\hour'],
    ['36', 'Max Watt', '\\Watt_\\max'],
    ['37', 'Fill Factor', '\\FF'],
    ['38', 'Photovoltaic Energy', '\\P_\\inn'],
    ['39', 'Limits', 'e^x=\\lim_{n\\to\\infty} \\left( 1+\\frac{x}{n} \\right)^n'],
    ['40', 'Limits #2', 'e^x=\\lim_{4578545n\\to\\infty} y'],
    ['41', 'F prime of x', 'y = f^\\prime(x)'],
    ['42', 'F double prime of x', 'y = f^{\\prime\\prime}(x)'],
    ['43', 'F triple prime of x', 'y = f^{\\prime\\prime\\prime}(x)'],
    ['44', 'Matrix', '\\left[ \\begin{array}{rr} 5 & -2 \\\\ 3 & 0 \\end{array} \\right]'],
    ['45', 'Matrix #2', '\\left[ \\begin{array}{rr} 1 & 4 \\\\ 10 & 7 \\end{array} \\right]'],
    ['46', 'Matrix #3', '\\left[ \\begin{array}{rr} 5 & -2 & 5 \\\\ 5 & 1 & -2 \\\\ 3 & 0 & 10 \\end{array} \\right]'],
    ['47', 'Branched function', 'x = \\left\\{\\begin{array}{l} a + b = 0\\\\ \\varphi a + \\psi b = 1\\end{array}\\right.'],
    ['48', 'Log', '\\log_b(xy) = \\log_b (x) + \\log_b (y), \\,'],
    ['49', 'Union and Intersection', 'A \\cup B \\cap C'],
    ['50', 'Some signs', 'A \\ne B \\leq C \\not\\subset \\Delta'],
    ['51', 'More vars', 'l \\neq m'],
    ['52', 'Area and Radius', '\\Area = \\pi\\radius^2'],
    ['53', 'Brackets', '\\left(0, 1 \\right], \\left\\{ 10,4,3,4,5,6 \\right\\}, \\left[ 5,6 \\right]'],
].map(function (el) {
    return {
        id: el[0],
        name: el[1],
        equation: el[2]
    };
}).reverse();
