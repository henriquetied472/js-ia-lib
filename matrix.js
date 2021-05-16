class Matrix {
    constructor(rows, cols) {
        this.rows = rows
        this.cols = cols

        this.data = []
        for(let i = 0; i < rows; i++) {
            let arr = []
            for(let j = 0; j < cols; j++) {
                arr.push(Math.floor(Math.random() * 10))
            }
            this.data.push(arr)
        }
    }

    map(func) {
        this.data = this.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j)
            })
        })

        return this
    }

    static add(A, B) {
        let matrix = new Matrix(A.rows, A.cols)
        matrix.map((num, i, j) => {
            return A.data[i][j] + B.data[i][j]
        })
    }
}