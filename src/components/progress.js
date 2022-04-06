const Progress = {
    render: (props1, props2) => {
        return `
        <div class="progress">
              <div class = "progress-done"
              style="width:${(props1*100)/props2}%"></div>
        </div>
        
        `
    }
}
export default Progress;