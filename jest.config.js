module.exports = {
    roots: ["<rootDir>/src"],
    clearMocks: true,

    collectCoverage: true,

    coverageDirectory: "coverage",

    coverageProvider: "v8",

    moduleNameMapper: {
        "@src/(.*)": "<rootDir>/src/$1",
        "@test/(.*)": "<rootDir>/test/$1",
    },
};
